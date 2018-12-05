alert("hello")

//arrow functions
var binaryArrayToNumber = arr => {

  //function parses a string argument and returns an integer of the specified
  // parseInt uses radix 2 to return the binary numbers
  //arr.join is a method that creates and returns a new string of all in the elements in the array
  return parseInt(arr.join(''),2);
};

console.log( binaryArrayToNumber([0, 0, 0, 1]) ); // ==> 1
console.log( binaryArrayToNumber([0, 0, 1, 0]) ); // ==> 2
console.log( binaryArrayToNumber([0, 1, 0, 1]) ); // ==> 5
console.log( binaryArrayToNumber([1, 0, 0, 1]) ); // ==> 9
console.log( binaryArrayToNumber([0, 0, 1, 0]) ); // ==> 2
console.log( binaryArrayToNumber([0, 1, 1, 0]) ); // ==> 6
console.log( binaryArrayToNumber([1, 1, 1, 1]) ); // ==> 15
console.log( binaryArrayToNumber([1, 0, 1, 1]) ); // ==> 11
