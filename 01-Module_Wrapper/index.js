(function(exports, require, module, __filename, __dirname) {
  // Your code lives here
  console.log("Hello, Node!");
});


(function() {
  console.log("IIFE running");
})();


console.log(exports)
// console.log(require)
console.log(module)
console.log(__filename)
console.log(__dirname)