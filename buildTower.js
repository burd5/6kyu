/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
    // total length of last array element
    let length = (nFloors * 2) - 1;
    // total length of * in last array element
    let astLength = (nFloors * 2) - 1;
    // array to push each tower stack too
    let tower = [];
    // start at bottom floor, for each level, subtract 2 from number of * and add the remaining difference/2 to both sides
    for(let i = nFloors; i > 0; i--){
        tower.unshift(' '.repeat((length - astLength)/2) + '*'.repeat(astLength) + ' '.repeat((length - astLength)/2))
        astLength = astLength - 2
      }
    //return final tower structure
    return tower;
  }

  // other solutions


  function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }