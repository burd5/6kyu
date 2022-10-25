/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/


function reverse(str){
    let arr = str.split(' ');
    let reverseArr = [];
    for(let i = 0; i < arr.length; i++){
      if(i % 2 !== 0){
        reverseArr.push(arr[i].split('').reverse().join(''))
      }
      else{
        reverseArr.push(arr[i])
      }
    }
   return reverseArr.join(' ').trim()
 }



