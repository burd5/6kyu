/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
    // array to store numbers that are multiples of 3 or 5
    let multiples = [];
    // start at 0 and increment up towards number, pushing numbers that are multiples of 3 or 5 to the multiples array
    for(let i = 0; i < number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        multiples.push(i)
      }
    }
    // reduce the final array (find the sum of multiples) and return
    return multiples.reduce( (sum,num) => num + sum, 0);
  }