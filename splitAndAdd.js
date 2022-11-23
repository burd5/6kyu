/*

Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]

*/

const splitAndAdd = (arr, n) => {
    while (n-- > 0) {
      if (arr.length % 2 != 0) arr.unshift(0);
      let mid = Math.floor(arr.length / 2);
      const arr1 = arr.slice(0, mid);
      const arr2 = arr.slice(mid);
      arr = arr1.map((el, i) => el + arr2[i]);
    }
    return arr;
  };

