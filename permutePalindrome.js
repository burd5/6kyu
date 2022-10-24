/*
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False
*/

//returns true or false, case-sensitive, efficiency matters

//Examples
// madam --> true
// bbo --> true
// ppoo --> true
// chair --> false

function permuteAPalindrome (input) { 
    let arr = [...input]
    let letterMap = {};
    for(letter of arr){
      if(letterMap.hasOwnProperty(letter)){
        letterMap[letter]++
      }
      else{
        letterMap[letter] = 1
      }
    }
    let objValues = Object.values(letterMap);
    let counter = 0;
    for(let i = 0; i < objValues.length; i++){
      if(objValues[i] % 2 !== 0){
        counter ++
      }
    }
   return counter > 1 ? false : true
}

console.log(permuteAPalindrome('madam'), true)
console.log(permuteAPalindrome('bbo'), true)
console.log(permuteAPalindrome('ppoo'), true)
console.log(permuteAPalindrome('chair'), false)

// Other Solution

function permuteAPalindrome ([...input], odd = 0) { 
    new Set(input).forEach(a => input.filter(b => b == a).length % 2 ? odd++ : 0)
    return odd < 2;
  }