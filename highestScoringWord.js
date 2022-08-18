/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    //creating variable to store alphabet letters
    let alphabet = '1abcdefghijklmnopqrstuvwxyz'
    //splitting alphabet into an array to assign each letter to the value of it's index
    let arr = alphabet.split('');
    //splitting the words in the original string
    let arrWords = x.split(' ');
    //creating array to score the sum of the values of the letter indexes
    let arrScores = [];
    //finding the index of each letter from the arr and pushing the sum to arrScores
    for(word of arrWords){
      let sum = 0
      for(let i = 0; i < word.length; i++){
        sum += arr.indexOf(word[i])
      }
      arrScores.push(sum);
    }
    //finding the max value from the arrScores
    let max = Math.max(...arrScores);
    //creating another array to hold multiple words in the case they have the same max
    let highScores = [];
    //pushing any word with the max score to highScores array
    for(let i = 0; i < arrScores.length; i++){
      if(arrScores[i] == max){
        highScores.push(arrWords[i])
      }
    }
    //returning the first word that has the highest score
    return highScores[0];
  }