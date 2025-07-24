// inspector.js
import path from 'path';
import fs from 'fs'

// Step 1: Get user input (file path)
const inputPath = 'C:/Users/pc/Desktop/Study/Web-Development/Huxn WebDev/Node_js/Path-Modules-04/file-inspector/inspector.js'

if (!inputPath) {
  console.log("❗ Please provide a file path");
  process.exit(1);
}

// Step 2: Resolve full path
const fullPath = path.resolve(inputPath);

// Step 3: Check if file exists
if (!fs.existsSync(fullPath)) {
  console.log("❌ File does not exist.");
  process.exit(1);
}

// Step 4: Read file stats
const stats = fs.statSync(fullPath);

// Step 5: Print file information
console.log("✅ File Found!");
console.log("📄 File Name     :", path.basename(fullPath));
console.log("📁 Directory     :", path.dirname(fullPath));
console.log("🧩 Extension     :", path.extname(fullPath));
console.log("📍 Absolute Path :", fullPath);
console.log("📏 File Size     :", (stats.size / 1024).toFixed(2), "KB");
console.log("📆 Created At    :", stats.birthtime);
