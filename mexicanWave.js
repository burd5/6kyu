/*
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str){
    //create an array that will hold the str word repeated
    let initialArr = [];
    //push the word(s) in the string to the array one time for every index in the string
    for(let i = 0; i < str.length; i++){
      initialArr.push(str);
    }
    //create an array to hold the final answer
    let finalArr = [];
    //for each word in the initial array, find the letter at the index of the array element and uppercase it - if index is ' ', push a blank space
    for(let i = 0; i < initialArr.length; i++){
      let arr = initialArr[i].split('');
      if(arr[i] == ' '){
        finalArr.push()
      }
      else{
      arr[i] = arr[i].toUpperCase();
      let joinWord = arr.join('')
      finalArr.push(joinWord)
    }}
    //return the final array
    return finalArr;
  }

  //other solution

  function wave(str){
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
  }

  //other solution

  var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)
