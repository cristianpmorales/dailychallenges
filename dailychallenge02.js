Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.") Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

function alphabetPosition(text) {
 var str = '';
 //holds the argument of text and replaces all empty spaces converts them to lowercase then with map the string is getting searched
 text.replace(/[^a-zA-Z]+/g,'').toLowerCase().split('').map(x=> str += (x.charCodeAt()-96 + ' '));
 console.log(text.replace(/[^a-zA-Z]+/g,''))
  console.log(str) //
  console.log(str.slice)
  return str.slice(0,-1); }
