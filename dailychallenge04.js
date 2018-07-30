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
