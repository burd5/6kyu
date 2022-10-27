/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

// Return the output array, and ignore all non-op characters
function parse( data )
{
  let arr = [...data];
  let finalArr = []
  let value = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'i'){
      value++
    }
    else if(arr[i] === 'd'){
      value--
    }
    else if(arr[i] === 's'){
      value = value ** 2
    }
    else if(arr[i] === 'o'){
      finalArr.push(value)
    }
    else{
      continue;
    }
  }
  return finalArr;
}


// More concise solution

function parse(data) {
    let res = [];
  
    data.split('').reduce((cur, s) => {
      if (s === 'i') cur++;
      if (s === 'd') cur--;
      if (s === 's') cur = Math.pow(cur, 2);
      if (s === 'o') res.push(cur);
      
      return cur;
    }, 0);
    
    return res;
  }