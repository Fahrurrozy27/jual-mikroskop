const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data/articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

// List of realistic Unsplash photos related to laboratory, science, microscope, cells
const unsplashImages = [
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1532187863486-56cb6c11a5f6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1579165148092-f1533c369525?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89d14c77618?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1574482620826-40685ca5ebe2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1530497610259-7b186b720ee2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1614935151651-0bea6508abb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1584036561584-b034f5209307?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1532187643603-5111b4109f1b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80"
];

// Sort files to have consistent mapping art-1, art-2 ... art-15
files.sort((a, b) => {
  const numA = parseInt(a.match(/art-(\d+)/)[1]);
  const numB = parseInt(b.match(/art-(\d+)/)[1]);
  return numA - numB;
});

files.forEach((file, index) => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match image: "/images/..."
  content = content.replace(/image:\s*["'][^"']+["']/i, `image: "${unsplashImages[index]}"`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated image for ${file} with URL: ${unsplashImages[index]}`);
});
