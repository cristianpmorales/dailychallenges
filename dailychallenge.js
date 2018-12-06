var isSquare = function(n){
  // Numbers less than 0 are not square
  if (n < 0) { console.log('Not a number ') ; }

  // Get square root of number
  x=Math.sqrt(n);

  // Check if sqrt is an integer
  if (Number.isInteger(x)) {
    return true;
  }
  else return false;
}

console.log(isSquare(-1)); // => false
console.log(isSquare( 3)); // => false
console.log(isSquare( 4)); // => true
console.log(isSquare(25)); // => true
console.log(isSquare(26)); // => false
console.log(isSquare('hello')); // => false
