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