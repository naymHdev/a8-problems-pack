/* 
7.  Task: Leap Year Checker

Write a function that determines whether a given year is a leap year.

Example: Happy New Year


*/

const leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Happy New Year";
  } else {
    return "It's not a new year";
  }
};

// console.log(leapYear(2100));
// console.log(leapYear(2000));
// console.log(leapYear(2024));
