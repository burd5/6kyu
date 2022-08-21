/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

//PREP
//P: a string
//R: all the occuring characters and their counts
//E: ^^
//P: 

function count (string) {  
    //turn string into an array
    let arr = string.split('');
    //create object that holds character counts from array
    let occurrences = {}
    //for loop that finds whether the character exists in the object and if so adds 1 for every occurence, if not - adds character to object
    for(let i = 0, j = arr.length; i < j; i++){
        occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
      }
    //if object contains no characters, return empty object, if not - return occurences
    if(occurrences.length == 0){
      return {};
    }
    else{
      return occurrences;
    }
  }

  //Other solution
  function count (string) {  
    var count = {};
    //split string into an array, for each element in the array, determine whether object contains eleme3nt, if it does - add 1, if it doesn't, add the element
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

  //Other solution

  var occurrences = arr.reduce(function(obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  
  console.log(occurrences);        // {ab: 3, pq: 1, mn: 2}
  console.log(occurrences['mn']);  // 2
  