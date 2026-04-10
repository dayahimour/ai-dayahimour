const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const iconsPackagePath = path.join(__dirname, 'node_modules', '@lobehub', 'icons-static-svg');
const outputDir = path.join(__dirname, 'icons-svg');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find all SVG files
function findSVGFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findSVGFiles(fullPath));
    } else if (file.endsWith('.svg')) {
      results.push(fullPath);
    }
  }
  return results;
}

console.log(`Looking for SVG files in ${iconsPackagePath}...`);
const svgFiles = findSVGFiles(iconsPackagePath);
console.log(`Found ${svgFiles.length} SVG files.`);

// Copy each file
let copied = 0;
for (const svgFile of svgFiles) {
  const relativePath = path.relative(iconsPackagePath, svgFile);
  const outputPath = path.join(outputDir, relativePath);
  const outputDirPath = path.dirname(outputPath);
  
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
  
  fs.copyFileSync(svgFile, outputPath);
  copied++;
}

console.log(`Copied ${copied} SVG files to ${outputDir}`);

// Also copy from @lobehub/icons-static-png if installed
try {
  const pngPackagePath = path.join(__dirname, 'node_modules', '@lobehub', 'icons-static-png');
  if (fs.existsSync(pngPackagePath)) {
    const pngOutputDir = path.join(__dirname, 'icons-png');
    if (!fs.existsSync(pngOutputDir)) {
      fs.mkdirSync(pngOutputDir, { recursive: true });
    }
    
    // Copy all PNG files recursively
    const pngFiles = findPNGFiles(pngPackagePath);
    console.log(`Found ${pngFiles.length} PNG files.`);
    
    for (const pngFile of pngFiles) {
      const relativePath = path.relative(pngPackagePath, pngFile);
      const outputPath = path.join(pngOutputDir, relativePath);
      const outputDirPath = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }
      
      fs.copyFileSync(pngFile, outputPath);
    }
    console.log(`Copied PNG files to ${pngOutputDir}`);
  }
} catch (err) {
  console.log('PNG package not installed, skipping...');
}

function findPNGFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findPNGFiles(fullPath));
    } else if (file.endsWith('.png')) {
      results.push(fullPath);
    }
  }
  return results;
}