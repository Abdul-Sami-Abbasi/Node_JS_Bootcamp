// os-demo.js

/**
 * ✅ OS Module in Node.js
 * 
 * The 'os' module is a built-in Node.js module used to fetch information about
 * the operating system such as CPU architecture, memory, platform, uptime, etc.
 * It's useful for monitoring, logging, or writing platform-specific logic.
 */

const os = require('os');

console.log("🧠 Platform:", os.platform());          // e.g., 'win32'
console.log("💻 CPU Arch:", os.arch());             // e.g., 'x64'
console.log("📟 Hostname:", os.hostname());         // e.g., 'DESKTOP-1234'
console.log("🧠 OS Type:", os.type());              // e.g., 'Windows_NT'
console.log("⏱️ Uptime (s):", os.uptime());         // e.g., 12345

// Convert memory from bytes to GB
console.log("💾 Total Memory:", (os.totalmem() / (1024 ** 3)).toFixed(2), "GB");
console.log("🧠 Free Memory:", (os.freemem() / (1024 ** 3)).toFixed(2), "GB");

console.log("👤 Current User Info:", os.userInfo());
console.log("🌐 Network Interfaces:", os.networkInterfaces());
