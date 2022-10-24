/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

// so if not numbers, return NaN
// Examples
// [2,4,5] --> [2,4,6]
// [3,6,9] --> [3,7,0]
// [1,2,5,1] --> [1,2,5,2]

function addOneToArray(arr){
    // join the array and convert to a number
        let number = Number(arr.join('')) + 1
    // return the number as an array
        return String(number.split(''))
}

console.log(addOneToArray([2,4,5]), [2,4,6] )
console.log(addOneToArray([3,6,9]), [3,7,0] )
console.log(addOneToArray([1,2,5,1]), [1,2,5,2])