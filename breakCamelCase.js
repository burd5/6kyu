/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//PREP
//P: a string of words
//R: the string with a space between the words
//E: "camelCasing"  =>  "camel Casing"
//P: 

function solution(string) {
    /*let arr = string.split('')
    let upperCaseLetters = arr.filter( element => element.toLowerCase() !== element);
    let indexesOfLetters = [];
    for(let i = 0; i < upperCaseLetters.length; i++){
      indexesOfLetters.push(arr.indexOf(upperCaseLetters[i]))
    }
    return string.slice(0,indexesOfLetters) + ' ' + string.slice(indexesOfLetters);
    */
  return string.split(/(?=[A-Z])/).join(' ');
}

//alternate solution without regex

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }