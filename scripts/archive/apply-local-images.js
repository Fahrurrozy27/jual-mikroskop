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

const microscope1 = filesInSource.find(f => f.startsWith('microscope_1_'));
const microscope2 = filesInSource.find(f => f.startsWith('microscope_2_'));
const microscope3 = filesInSource.find(f => f.startsWith('microscope_3_'));
const microscope4 = filesInSource.find(f => f.startsWith('microscope_4_'));
const microscope5 = filesInSource.find(f => f.startsWith('microscope_5_'));

const mapping = [
  microscope1, microscope2, microscope3, microscope4, microscope5
];

// Copy files
mapping.forEach((filename, index) => {
  if (filename) {
    const srcPath = path.join(sourceDir, filename);
    const destPath = path.join(destDir, `microscope-${index + 1}.png`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${filename} to microscope-${index + 1}.png`);
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

  // Assign image 1 to 5 circularly
  const imageIndex = (index % 5) + 1;
  const localImagePath = `/images/articles/microscope-${imageIndex}.png`;

  content = content.replace(/image:\s*["'][^"']+["']/i, `image: "${localImagePath}"`);
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file} to use ${localImagePath}`);
});
