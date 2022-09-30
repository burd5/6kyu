/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
    //split string into separate words
    let arr = string.split(' ');
    //create array to hold transformed words
    let answer = [];
    //for each word in the string, uppercase even indexes and lowercase odd indexes
    for(word of arr){
       answer.push(word.split('').map( (letter,index) => index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()).join(''));
    }
    //join the words in the array for the final transformed sentence
    return answer.join(' ');
  }