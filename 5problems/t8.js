/* 
8. Task: Unique Values

Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
*/

const numbersWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 4, 9, 10, 5];

const uniqueNumbers = [...new Set(numbersWithDuplicates)];
// console.log(uniqueNumbers);
