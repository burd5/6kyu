/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/

//PREP
//P: two arrays with string values
//R: sorted order of substrings from array1
//E: see above
//P

function inArray(array1,array2){
    //create array to push matching substrings too
    let answer = [];
    //create loop to compare each string in array1 to array 2, if array2 contains substring of array1, push to the answer array. Only if answer doesn't already include that substring
    for(let i = 0; i < array1.length; i++){
      for(let j = 0; j < array2.length; j++){
        if(array2[j].includes(array1[i]) && !answer.includes(array1[i])){
          answer.push(array1[i]);
        }
      }
    }
    //return the sorted array in alphabetical order
    return answer.sort( (a,b) => a.localeCompare(b));
  }