You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
Test.assertSimilar(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
Test.assertSimilar(sortArray([]),[])

function sortArray(array) {
  // Variable odd is assigned to two methods that calls functions
  console.log(array)
  //variable oddNumbers returns the odd numbers in an acending order 
  //filter method changes the array to return all odds
  // compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
  //array elements are sorted according to the return value of the compare function
  var oddNumbers = array.filter(findOdd).sort(ascending)  
  console.log(array.map(replace_odd_inorder))
  return array.map(replace_odd_inorder);
  //function is used only to compare the numbers in the array and return them in a ascending order
  function ascending(a, b) {

    return a > b;
  }
  //function is used to find the results of each number modules
  function findOdd(anything) {
    return anything % 2;
  }

  function replace_odd_inorder(anything) {
    //funtion is used to move the numbers in the array to an acending other by finding the odds and then 
    //shifting them. This will leave the even numbers in place since the conditional is only looking for odd
    //if condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.
    //The shift() method removes the first element from an array and returns that removed element.
    return findOdd(anything) ? oddNumbers.shift() : anything;
  }
}