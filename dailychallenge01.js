// (sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// (sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
// (sumDigPow(10, 100),  [89])
// (sumDigPow(90, 100), [])
// (sumDigPow(90, 150), [135])
// (sumDigPow(50, 150), [89, 135])




function sumDigPow(a, b) {
  var arr = [];
  //Loop with a range from i=10 to b=150 and increments by one
  for (var i = a; i <= b; i++) {
    var sum = 0;
    //for loop to evaluate i from previous loop
    for (var j = 0; j <= String(i).length; j++) {
    //finds the sum of string broken into single digits to the power of j++
      sum += Math.pow(parseInt(String(i)[j]), j+1);
      //conditional to find if the sum is the same as i push it to the array that was declared at the start of the function
      if (sum === i) arr.push(i);
    }
  }
  return arr;
}
