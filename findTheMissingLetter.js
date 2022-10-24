/*

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

*/

//  Examples
// ['l', 'm', 'o'] = 'n'
// ['a', 'b', 'c', 'e'] = 'd'

function findMissingLetter(arr){
    // make new array with unicode values
    let charCodes = arr.map( letter => charCodeAt(letter))
    // loop through array to find number that is missing

    //convert that number back to char value and return
}

console.log(findMissingLetter(['l', 'm', 'o']), 'n')
console.log(findMissingLetter(['a', 'b', 'c', 'e']), 'd')
