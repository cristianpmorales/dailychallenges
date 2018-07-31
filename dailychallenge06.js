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
