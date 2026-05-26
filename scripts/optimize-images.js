const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SRC_DIR = path.resolve(__dirname, '../src');

// Supported extensions for conversion
const IMAGE_EXT_REGEX = /\.(png|jpg|jpeg)$/i;

// Extensions of code files we want to update
const CODE_EXT_REGEX = /\.(tsx|ts|js|jsx|html|css|json)$/i;

// Exclude these directories during walks
const EXCLUDE_DIRS = ['node_modules', '.next', '.git'];

/**
 * Recursively gets all files in a directory matching a regex.
 */
function getFilesRecursive(dir, regex, filesList = []) {
  if (!fs.existsSync(dir)) return filesList;
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const baseName = path.basename(fullPath);
      if (EXCLUDE_DIRS.includes(baseName)) continue;
      getFilesRecursive(fullPath, regex, filesList);
    } else if (stat.isFile() && regex.test(item)) {
      filesList.push(fullPath);
    }
  }

  return filesList;
}

async function run() {
  console.log('=== Starting Image Optimization & WebP Conversion ===');
  console.log(`Public Dir: ${PUBLIC_DIR}`);
  console.log(`Src Dir: ${SRC_DIR}\n`);

  // 1. Find all target images
  const imageFiles = getFilesRecursive(PUBLIC_DIR, IMAGE_EXT_REGEX);
  console.log(`Found ${imageFiles.length} images to convert.`);

  const replacementPairs = [];
  let totalOldSize = 0;
  let totalNewSize = 0;
  const conversionStats = [];

  // 2. Convert each image to WebP
  for (const imgPath of imageFiles) {
    const oldSize = fs.statSync(imgPath).size;
    totalOldSize += oldSize;

    const parsedPath = path.parse(imgPath);
    const relativePath = path.relative(PUBLIC_DIR, imgPath);
    
    // Output path with .webp extension
    const newFileName = parsedPath.name + '.webp';
    const newImgPath = path.join(parsedPath.dir, newFileName);
    
    console.log(`Converting: ${relativePath} (${(oldSize / 1024 / 1024).toFixed(2)} MB)`);

    try {
      // Quality 90 is visually lossless but provides excellent compression
      await sharp(imgPath)
        .webp({ quality: 90 })
        .toFile(newImgPath);

      const newSize = fs.statSync(newImgPath).size;
      totalNewSize += newSize;
      
      const savedBytes = oldSize - newSize;
      const savedPercent = ((savedBytes / oldSize) * 100).toFixed(1);

      console.log(` -> Saved to: ${newFileName} (${(newSize / 1024).toFixed(1)} KB, -${savedPercent}%)`);

      conversionStats.push({
        original: imgPath,
        converted: newImgPath,
        oldSize,
        newSize,
        relativePath
      });

      // Record replacement pair (e.g. ['student.png', 'student.webp'])
      const oldFileName = parsedPath.base; // student.png
      replacementPairs.push({
        old: oldFileName,
        new: newFileName
      });

      // Also support matching case-insensitively or with different extensions just in case
      // e.g. if code references "student.PNG" but file is "student.png"
      if (oldFileName.toLowerCase() !== oldFileName) {
        replacementPairs.push({
          old: oldFileName.toLowerCase(),
          new: newFileName
        });
      }
    } catch (err) {
      console.error(`Failed to convert ${relativePath}:`, err);
    }
  }

  if (conversionStats.length === 0) {
    console.log('No images were converted. Exiting.');
    return;
  }

  console.log('\n=== Image Conversion Complete ===');
  console.log(`Total Original Size: ${(totalOldSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total WebP Size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  const totalSaved = totalOldSize - totalNewSize;
  console.log(`Total Saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (-${((totalSaved / totalOldSize) * 100).toFixed(1)}%)\n`);

  // 3. Update Codebase References
  console.log('=== Updating Codebase References ===');
  
  // Find all code files under src/ and public/
  const codeFilesSrc = getFilesRecursive(SRC_DIR, CODE_EXT_REGEX);
  const codeFilesPublic = getFilesRecursive(PUBLIC_DIR, CODE_EXT_REGEX);
  const codeFiles = [...codeFilesSrc, ...codeFilesPublic];
  
  console.log(`Found ${codeFiles.length} code files to check.`);

  // Sort replacements by original filename length in descending order
  // This ensures longer filenames (e.g. 'olympus-bx43.png') are replaced before shorter ones ('bx43.png')
  replacementPairs.sort((a, b) => b.old.length - a.old.length);

  let updatedFilesCount = 0;

  for (const codePath of codeFiles) {
    // Skip this optimize script itself
    if (codePath === __filename) continue;

    let content = fs.readFileSync(codePath, 'utf8');
    let hasChanges = false;

    // Apply replacements
    for (const pair of replacementPairs) {
      // We search for the exact filename, case-sensitive
      // To be safe we look for it in quotes, paths, etc.
      // Replacing the exact literal filename is extremely safe when it has the extension
      if (content.includes(pair.old)) {
        // Global replace of old filename with new WebP filename
        // Escape regex special chars in filename (like dots, dashes)
        const escapedOld = pair.old.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(escapedOld, 'g');
        content = content.replace(regex, pair.new);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(codePath, content, 'utf8');
      const relPath = path.relative(path.resolve(__dirname, '..'), codePath);
      console.log(`Updated references in: ${relPath}`);
      updatedFilesCount++;
    }
  }

  console.log(`Updated ${updatedFilesCount} code files.\n`);

  // 4. Clean up original files
  console.log('=== Cleaning Up Original Image Files ===');
  let deletedCount = 0;
  for (const stat of conversionStats) {
    try {
      if (fs.existsSync(stat.converted)) {
        fs.unlinkSync(stat.original);
        deletedCount++;
      } else {
        console.warn(`Skipping deletion of ${stat.original} because converted WebP was not found.`);
      }
    } catch (err) {
      console.error(`Failed to delete original file ${stat.original}:`, err);
    }
  }
  console.log(`Deleted ${deletedCount} original image files.\n`);
  console.log('=== Image Optimization Process Fully Completed successfully! ===');
}

run().catch(console.error);
