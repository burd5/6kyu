/*
DESCRIPTION:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }
  //

  var expandedForm = (num) => {
    var arr = num.toString().split('').reverse();
    var result = [];
    for(var i = 0; i < arr.length; i++){
      arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
    }
    return result.reverse().join(' + ')
  }