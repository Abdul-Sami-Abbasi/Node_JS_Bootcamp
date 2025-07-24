// url-demo.js

/**
 * ✅ URL Module in Node.js
 * 
 * The 'url' module is a built-in Node.js module that helps you parse,
 * format, and resolve URLs. It is useful for working with routing,
 * query strings, domain names, ports, paths, and more.
 * 
 * Node provides both legacy API (url.parse) and modern WHATWG URL class.
 * Modern approach is recommended.
 */

const { URL } = require('url');

// Sample URL
const siteURL = new URL('https://sami.dev:3000/portfolio/project?id=42&tech=nodejs#demo');

console.log("🌐 Full URL:", siteURL.href);
console.log("🧭 Protocol:", siteURL.protocol);
console.log("🏢 Host:", siteURL.host);         // sami.dev:3000
console.log("🧩 Hostname:", siteURL.hostname); // sami.dev
console.log("🛣️ Pathname:", siteURL.pathname); // /portfolio/project
console.log("🔍 Query Params (id):", siteURL.searchParams.get('id'));
console.log("🔍 Query Params (tech):", siteURL.searchParams.get('tech'));
console.log("🏷️ Hash:", siteURL.hash);         // #demo

// Modifying query params
siteURL.searchParams.append('level', 'advanced');
console.log("🛠️ Updated URL:", siteURL.toString());
