Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs.

function inArray(array1, array2) {

  result = [];
  //OuterLoop is the Identifier associated with the continue the statement.
  //Outer loop for the first array
   outerLoop: for (var outer = 0; outer < array1.length; outer++) {
   //loop for the inner array 
       for ( var inner = 0; inner < array2.length; inner++) {
       //conditional to find if the inner includes from the outer array. 
       //The includes() method determines whether an array includes a certain element, returning true or false 
           if (array2[inner].includes(array1[outer])) {
	   //if the conditional is met then the array gets pushed to the new results [] array previously declared
               result.push(array1[outer]);
	       //The continue statement terminates execution of the statements in the current iteration of the current loop,             	       //and continues execution of the loop with the next iteration.
               continue outerLoop;
           }
        }
    }
    //return the results in an order
    return result.sort();
}