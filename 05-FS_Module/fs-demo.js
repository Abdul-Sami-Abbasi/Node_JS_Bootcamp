// fs-demo.js

/**
 * ✅ FS Module in Node.js
 * 
 * The 'fs' (File System) module is a built-in module in Node.js that allows
 * interaction with the file system such as reading, writing, updating,
 * deleting files and directories — both synchronously and asynchronously.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'note.txt');

// 1. Write content to a file (creates or overwrites)
fs.writeFile(filePath, '🚀 Node.js is awesome!\n', (err) => {
  if (err) throw err;
  console.log('✅ File written successfully.');

  // 2. Append more content
  fs.appendFile(filePath, '📘 Adding more content to the file...\n', (err) => {
    if (err) throw err;
    console.log('📝 Content appended.');

    // 3. Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('📂 File Contents:\n' + data);

      // 4. Get file stats
      fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        console.log('📏 File Size:', (stats.size / 1024).toFixed(2), 'KB');
        console.log('🕒 Created At:', stats.birthtime);
      });
    });
  });
});
