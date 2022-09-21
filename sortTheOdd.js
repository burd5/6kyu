/*
DESCRIPTION:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
    //array to hold the odd numbers
      let odds = [];
    //loop to pull out all odd numbers in original array
      for(let i = 0; i < array.length; i++){
        if(Math.abs(array[i] % 2) == 1){
          odds.push(array[i]);
        }
      }
    //sort the odd array
      let sortedOdds = odds.sort( (a,b) => a - b);
    //keep even numbers in place and replace odd numbers starting from low
      return array.map( number => Math.abs(number % 2) == 0 ? number : sortedOdds.shift());
  }

  //other solution

  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }