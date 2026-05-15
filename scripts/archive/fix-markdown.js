const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data/articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace bold **text** with <strong>text</strong>
  content = content.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');

  // Replace italics *text* with <em>text</em>
  content = content.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

  // Replace images with loremflickr or similar if needed. Wait, we'll do this in a separate step or here.
  // We can use a random microscope image from Unsplash. There are some reliable static unsplash IDs for science/medical.
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
