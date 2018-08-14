# dailychallenges
Daily Challenges from Codewars

## Daily Challenge 1 

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  new Test.assertEquals(findOdd(a), n);
}

  new Test.describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});


function findOdd(A) {
	//loop through the array
	for (i=0; i < A.length; i++){
		//count the array
		count = A[i]
		//make sure to save each index in the array
		othernumber = count
		if (othernumber % 2 ==1){
				A=othernumber
		//return the index that appears an odd number of times
		}
	return A;
	}
}

## Daily Challenge 2 

function spinWords(wordString){
  return wordString.split("").reverse().join("");
}


// Test Results:
// Expected: 'Hey wollef sroirraw', instead got: 'sroirraw wollef yeH'

// Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");

## Daily Challenge 3


Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

Example: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// function friend(){
  var friends = ["bob","bill","amanda","joanne"]
  result = friends.filter(friends => friends.length == 4);
 console.log(result)


## Daily Challenge 4

function likes(names) {
  // TODO
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return names[0] + " likes this";
  if(names.length === 2) return names[0] + " and " + names[1] + " like this";
  if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  if(names.length > 3) return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}

//
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

## Daily Challenge 5

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

//If I had more time, create a condition for when a string already starts with a capital letter do not change it

function toCamelCase(str) {
  var camel = str.replace(/(?:^\w|[A-Z]|-\w|_\w)/g,
  function(letter, index) {
    return index === 0 && letter === letter.toLowercase  ?
        letter.toLowercase : letter.toUpperCase();
    } ).replace(/(-|_)/g, "");
  console.log(camel);
  return camel;
  }

## Daily Challenge 6

// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
   var evens = [];
   var odds = [];
   for (var i = 0; i < integers.length; i++)
   {
       if ((integers[i] % 2) == 0)
       {
           evens.push(integers[i]);
       }
       else
       {
           odds.push(integers[i]);
       }
   }
   var evennumber = evens.length;
   var oddnumber = odds.length;

   if (evennumber > oddnumber)
   {
       return odds[0];
   }
   else
   {
       return evens[0];
   }
}

## Daily Challenge 7

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

function abbrevName(name){
  var nam = name.split(' ');
  return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();

}

## Daily Challenge 8 

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

function solution(number){
var digits = String(+number).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
        console.log(i)
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        console.log(roman)
    return Array(+digits.join("") + 1).join("M") + roman;
        console.log(Array(+digits.join("") + 1))
}


// describe("solution", () => {
//   it ("should handle small numbers", () => {
//     Test.assertEquals(solution(1), 'I', '1 should, "I"')
//     Test.assertEquals(solution(2), 'II', '2 should, "II"')
//     Test.assertEquals(solution(3), 'III', '3 should, "III"')
//     Test.assertEquals(solution(4), 'IV', '4 should, "IV"')
//     Test.assertEquals(solution(5), 'V', '5 should, "V"')
//     Test.assertEquals(solution(9), 'IX', '9 should, "IX"')
//     Test.assertEquals(solution(10), 'X', '10 should, "X"')
//     Test.assertEquals(solution(11), 'XI')
//     Test.assertEquals(solution(19), 'XIX')
//     Test.assertEquals(solution(22), 'XXII')
//     Test.assertEquals(solution(15), 'XV')
//   });
//
//   it ("should handle large numbers", () => {
//     Test.assertEquals(solution(1000), 'M', '1000 should, "M"')
//     Test.assertEquals(solution(1001), 'MI', '1001 should, "MI"')
//     Test.assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
//     Test.assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"')
//     Test.assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
//   });
// });

## Daily Challenge 9

//Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

//Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely.
//15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {
  var arr = x.split("");
  var bumps = 0;
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i]==="n" ) {
      bumps+=1
    }
  }
  if ( bumps>15 ) {
    return "Car Dead"
  } else {
   return "Woohoo!"
  }
}

## Daily Challenge 10

//My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

//In honor of my grandfather's memory we will write a function using his formula!

//Take a list of ages when each of your great-grandparent died.
//Multiply each number by itself.
//Add them all together.
//Take the square root of the result.


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
  }
  
  ## Daily Challenge 11
  
  // Your task is to remove all duplicate words from string, leaving only single words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

Test.describe('Example tests', _ => {
  Test.it('should handle example case', _ => {
    Test.assertEquals(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
  });
});

const removeDuplicateWords = s =>{
  let arr = s.split(' ')
 arr = arr.filter(function(el,i){
     return arr.indexOf(el) == i
 })
return arr.join(' ')
}

  ## Daily Challenge 12
  
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above


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


  ## Daily Challenge 13
  
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.
  
  function alphabetPosition(text) {
  var str = '';
  //holds the argument of text and replaces all empty spaces converts them to lowercase then with map the string is getting searched 
  text.replace(/[^a-zA-Z]+/g,'').toLowerCase().split('').map(x=> str += (x.charCodeAt()-96 + ' '));
  console.log(text.replace(/[^a-zA-Z]+/g,''))
  console.log(str)
//   console.log(str.slice)
  return str.slice(0,-1);
}


  ## Daily Challenge 14

/*
Given an array of one's and zero's convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1
*/

const binaryArrayToNumber = arr => {
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

  ## Daily Challenge 15

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //converts string to lower case 
    var pangramString = string.toLowerCase()
    //variable to hold the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    //for loop to loop through all letters in the alphabet
    for (var i = 0; i < alphabet.length; i++)
    // indexOfreturns the index within the calling String object of the first occurrence of the specified value Returns -1 if the value is not found.
    // charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string   
    // if in the panagramString a copy of a character of the alphabet did not appear then return false 
    // else if it did appear return true
       if (pangramString.indexOf(alphabet.charAt(i)) == -1)
            return false;
    return true;
  
  //

  ## Daily Challenge 16

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

describe('description example', function() {
  var recipe, available;

  it('pass example tests', function() {
    recipe = {flour: 500, sugar: 200, eggs: 1};
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1');
    
    recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    available = {sugar: 500, flour: 2000, milk: 2000};
    Test.assertEquals(cakes(recipe, available), 0, 'Wrong result for example #2');
  });
});

function cakes(recipe, available) {
   // TODO: insert code

        var numberDivide=[];
        //for loop used in objects. this for loop iterates over properties of an object 
         for( var objectKey in recipe){
         //conditional for the objectKey if it exist in the other object Available
           if ( objectKey in available){
             //if objectKey is in the other Object available then assign variable num to
             //Math.floor which return the largest integer lessthan or equal to a given number
             var num=Math.floor(available[objectKey]/recipe[objectKey]);
             //pushes all num into the array that was declared earlier
             numberDivide.push(num);
             console.log(numberDivide)
           }
           //if one property in the object does not exist then just return 0
           else{ return 0;}
         } 
        //function then returns the index of the array 
        //parseInt converts numberDivide first index to an array
        //sorts the array from lowest to highest 
        //because the sort brings the smallest index[0] will always be the first in the array
       console.log((numberDivide.sort((x,y) => x-y)))
       return parseInt(numberDivide.sort((x,y)=>x-y));
}
  recipe = {flour: 500, sugar: 200, eggs: 1};
  available = {flour: 3500, sugar: 1200, eggs: 5, milk: 200};
  cakes(recipe,available)
  
  ## Daily Challenge 16
  
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
  
  function high(x){
  //.split method splits a String object into an array of strings by separating 
  //the string into substrings. This will help separate each word
  //seperating each word is necessary to find the points of each word
  var newStrings = x.split(' ')
    mx = 0
    res = '';
  //created a for loop to run through each letter and create a new array
  //the array will be placeholderArray since we need to still separate the word by letter
  for(let i = 0; i < newStrings.length; i++){
    var placeholderArray = newStrings[i]
    console.log(newStrings[i])
     value = 0;
    //for loop that goes through each array and it's index
    for(let j = 0; j < placeholderArray.length; j++){
      //placeholderArray.charCodeAt(j) finds the placement of each index in the ASCII table
      //subtract 96 because that is the start of the lowercase letters
      //once both number are substracted the total equals the number of where the letter will be 
      //the total is then added for each letter until the for loop is complete
      value += (placeholderArray.charCodeAt(j) - 96);
      console.log(placeholderArray.charCodeAt(j))
    }
    if(value > mx){
      console.log(value, ' val')
      console.log(mx, ' mx')
      mx = value;
      res = placeholderArray;
    }
  }
  console.log(res)
  return res;
}

  ## Daily Challenge 17

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

## Daily Challenge 18

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
