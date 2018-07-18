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
