// event-loop.js

// The Event Loop in Node.js is a mechanism that handles asynchronous operations,
// allowing Node.js to perform non-blocking I/O operations despite being single-threaded.
// It continuously checks for tasks, executes them, and delegates I/O operations to the system,
// handling callbacks as they become ready.

console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

setImmediate(() => {
  console.log("Immediate Callback");
});

Promise.resolve().then(() => {
  console.log("Promise Callback");
});

console.log("End");
