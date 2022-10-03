/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

//My attempt
var encryptThis = function(text) {
    let arr = text.split(' ');
    let arrCharCode = [];
    for(word of arr){
      if(word.length == 1){
        arrCharCode.push(String(word.charCodeAt(0)))
      }
      else if(word.length == 2){
        arrCharCode.push(String(word.charCodeAt(0)) + word[1])
      }
      else if(word.length == 3 || word.length == 4){
        arrCharCode.push(String(word.charCodeAt(0)) + word.slice(1).split('').reverse().join(''))
      }
      else{
      let last = word[1];
      let first = word[word.length - 1];
      let base = word.slice(last,first - 1);
      arrCharCode.push(String(word.charCodeAt(0)) + first + base + last)
    }}
    return arrCharCode.join(' ');
  }

  //Solution

  const encryptWord = w => {
    const first = w.charCodeAt(0);
    let res;
    switch (w.length) {
      case 0: return '';
      case 1: return first;
      case 2: res = [first, w[1]]; break;
      case 3: res = [first, w[2], w[1]]; break;
      default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
    }
    return res.join('');
  };
  
  const encryptThis = text => text.split(' ').map(encryptWord).join(' ');

  //Regex solution

  const encryptThis = text =>
  text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) => 
    word.charCodeAt(0) + b + mid + a);