/* 
6.Task: Array Reduction

Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
*/

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 3
];

const sumOfEvenNum = numbers.reduce((accumulator, currentValue) => {
    // console.log(currentValue);
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);

// console.log("sumOfEvenNum", sumOfEvenNum);
