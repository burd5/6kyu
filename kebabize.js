/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(str) {
    let arr = str.replace(/[0-9]/g, '').split('');
    let answer = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i + 1] == String(arr[i + 1]).toUpperCase()){
        answer.push(arr[i] + '-')
      }
      else{
        answer.push(arr[i])
      }
    }
    return answer.join('').toLowerCase();
  }