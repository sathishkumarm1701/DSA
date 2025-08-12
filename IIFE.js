
//IIFE Immidiately invokiked function expression
(function greet() {
    console.log("HELLO IIFE")
})()

console.log("Start");

setTimeout(() => {
  console.log("Inside timeout (after 2 seconds)");
}, 2000);

console.log("End");
