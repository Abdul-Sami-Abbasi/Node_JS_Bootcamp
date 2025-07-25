// events-module.js

// The Events Module in Node.js allows you to create, handle, and listen to custom events.
// It follows the Observer pattern and uses the EventEmitter class to register event listeners and emit events.

const EventEmitter = require('events');

// Step 1: Create an EventEmitter object
const myEmitter = new EventEmitter();

// Step 2: Register an event listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js Events.`);
});

// Step 3: Emit the event
myEmitter.emit('greet', 'Abdul Sami');
