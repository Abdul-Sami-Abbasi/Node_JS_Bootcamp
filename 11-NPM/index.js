// http-server.js

/**
 * ✅ HTTP Module in Node.js
 * 
 * The 'http' module is a built-in Node.js module used to create web servers 
 * and handle HTTP requests and responses. It lets you control routing, 
 * headers, status codes, and data, and is fundamental for building web APIs 
 * or serving websites directly from Node.
 */

import http from 'http';

// Create the server
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.statusCode = 200;
    res.end('<h1>🏠 Home Page</h1><p>Welcome to my Node.js server!</p>');
  } else if (url === '/about') {
    res.statusCode = 200;
    res.end('<h1>📘 About Page</h1><p>This is a sample Node.js About app.</p>');
  } else {
    res.statusCode = 404;
    res.end('<h1>❌ 404 Not Found</h1>');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
