//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
//..Example 1:
//Input: args = []
//Output: "Hello World"
//Explanation:
//const f = createHelloWorld();
//f(); // "Hello World"

//The function returned by createHelloWorld should always return "Hello World".
//Example 2:

//Input: args = [{},null,42]
//Output: "Hello World"
//Explanation:
//const f = createHelloWorld();
///f({}, null, 42); // "Hello World"
//Any arguments could be passed to the function but it should still always return "Hello World".
 //Constraints:
//0 <= args.length <= 10

//createHelloWorld function we'd like to return the function. first defining the createHelloWorld function. Which nect should return another function which always returns "Hello World"
function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }

//Now we need a inner function which should always  return " Hello World". Now this inner function should  be returned "Hello World". Within this inner function :
function createHelloWorld() {
    return function() {
        return "Hello World";
    };

 }


 //Lastly, wehn you call createHelloWorld*(), this will return the inner function which always returns "Hello World" You are able to assign this returned function toa variable and call it to see the result:
     const f = createHelloWorld();
     console.log(f()); // "Hello World"
// This has been how you create the createHelloWorld function that returns a new function always returning  "Hello World".


