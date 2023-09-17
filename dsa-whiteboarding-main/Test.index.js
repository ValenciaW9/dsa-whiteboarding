 'Import the assert module from Node.js'
const assert = require('assert');

// Import the createHelloWorld function
const createHelloWorld = require('./createHelloWorld');

// Test case 1: Calling the returned function should always return "Hello World"
const f = createHelloWorld();
assert.strictEqual(f(), "Hello World");

// Test case 2: Calling the returned function with any arguments should still return "Hello World"
const f2 = createHelloWorld();
assert.strictEqual(f2({}, null, 42), "Hello World");

// Additional test cases
// ...

console.log("All test cases passed!");

// ...In this test case, we use the assert module from Node.js to verify that the returned function always returns "Hello World". We create two instances of the returned function (f and f2) and call them with different arguments. The assert.strictEqual function is used to check if the actual result of calling the function matches the expected result ("Hello World").
