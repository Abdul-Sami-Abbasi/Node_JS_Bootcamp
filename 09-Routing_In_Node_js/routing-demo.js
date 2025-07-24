// routing-demo.js

/**
 * ✅ Routing in Node.js
 * 
 * Routing is the process of determining how an application responds
 * to a client request to a particular endpoint (path + method).
 * In raw Node.js (using http module), you manually match URLs and methods
 * using `req.url` and `req.method` to send different responses.
 */

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/' && method === 'GET') {
    res.write('<h1>🏠 Welcome to the Home Page</h1>');
    res.end();
  } else if (url === '/about' && method === 'GET') {
    res.write('<h1>📘 About Us</h1><p>This page is about us.</p>');
    res.end();
  } else if (url === '/contact' && method === 'GET') {
    res.write('<h1>📞 Contact Page</h1><p>Get in touch!</p>');
    res.end();
  } else {
    res.statusCode = 404;
    res.write('<h1>❌ 404 - Page Not Found</h1>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
