/*
Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.
*/

function grabscrab(anagram, dictionary) {
    let matches = [];
    for(let i = 0; i < dictionary.length; i++){
      let dicArr = dictionary[i].split('').sort().join('')
      let anaArr = anagram.split('').sort().join('')
        if(anaArr == dicArr){
          matches.push(dictionary[i])
        }
      }
    return matches;
  }

  //Other solution

  function grabscrab(anagram, dictionary) {
    anagram=anagram.split('').sort().join('');
    return dictionary.filter(a=>a.split('').sort().join('')===anagram)
  }
