/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

//PREP
//P: a string of words
//R: the string with the inside and outside letters flipped, if odd, middle letter remains the same
//E: taxi == atix
//P:

function insideOut(x){
    //split words in string into an array
    let arr = x.split(' ');
    //push words that have been turned "inside out" to this array
    let answer = []
    //modify each word in the array
    for(let i = 0; i < arr.length; i++){
      //conditional for words with 3 or less letters
      if(arr[i].length <= 3){
        answer.push(arr[i])
      }
      //conditional for words that are even in length
      else if(arr[i].length % 2 !== 0){
        let midpoint = arr[i].length/2
        let firstHalf = arr[i].slice(0,midpoint).split('').reverse().join('')
        let secondHalf = arr[i].slice(midpoint + 1).split('').reverse().join('')
        answer.push(firstHalf + arr[i].charAt(midpoint) + secondHalf)
      }
      //conditional for words that are odd in length
      else if(arr[i].length % 2 == 0){
        let midpoint = arr[i].length/2
        let firstHalf = arr[i].slice(0,midpoint).split('').reverse().join('')
        let secondHalf = arr[i].slice(midpoint).split('').reverse().join('')
        answer.push(firstHalf + secondHalf)
      }
    }
    //returning final array as a string
    return answer.join(' ');
  }

  //Other solution that is more efficient

  const insideOut = (str) => {  
    return str.split(' ').map(x => {    
      let left = x.substring(0, Math.floor(x.length / 2)).split('').reverse().join('')
      let right = x.substring(Math.ceil(x.length / 2)).split('').reverse().join('')
      let middle = x[Math.floor(x.length / 2)]    
      return x.length % 2 ? left + middle + right : left + right
    }).join(' ')
  }