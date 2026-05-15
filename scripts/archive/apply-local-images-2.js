const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\haian\\.gemini\\antigravity\\brain\\5ac59fa0-6e01-47d1-b4e6-f49acce9dfb5';
const destDir = path.join(__dirname, '../public/images/articles');
const articlesDir = path.join(__dirname, '../src/data/articles');

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Find the generated images
const filesInSource = fs.readdirSync(sourceDir);

const mapping = [];
for (let i = 6; i <= 15; i++) {
  const filename = filesInSource.find(f => f.startsWith(`microscope_${i}_`));
  mapping.push(filename);
}

// Copy files
mapping.forEach((filename, index) => {
  const realIndex = index + 6;
  if (filename) {
    const srcPath = path.join(sourceDir, filename);
    const destPath = path.join(destDir, `microscope-${realIndex}.png`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${filename} to microscope-${realIndex}.png`);
  } else {
    console.log(`Warning: Could not find image for microscope_${realIndex}`);
  }
});

// Update articles
const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.ts'));

articleFiles.sort((a, b) => {
  const numA = parseInt(a.match(/art-(\d+)/)[1]);
  const numB = parseInt(b.match(/art-(\d+)/)[1]);
  return numA - numB;
});

articleFiles.forEach((file, index) => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Assign 1-15 uniquely
  const imageIndex = index + 1; // 1 to 15
  const localImagePath = `/images/articles/microscope-${imageIndex}.png`;

  content = content.replace(/image:\s*["'][^"']+["']/i, `image: "${localImagePath}"`);
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file} to use ${localImagePath}`);
});
