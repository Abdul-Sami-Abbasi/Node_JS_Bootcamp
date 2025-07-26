// streams-example.js

// Streams in Node.js are objects that enable reading data from a source or writing data to a destination in a continuous fashion.
// They are memory-efficient and suitable for processing large files or network operations.

const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('input.txt', 'utf-8');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

console.log('Data is being streamed from input.txt to output.txt...');
