/* 
3.Task: Function Composition

Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/

function square(num) {
  return num * num;
}

// const sq = square(3);
// console.log("square", sq);

function double(num) {
  return num * 2;
}

// const dou = double(500);
// console.log(dou);

function add(num) {
  return num + 5;
}

// const adds = add(45);
// console.log(adds);

const compose = (num) => {
  const squared = square(num);
  const doubled = double(squared);
  const result = add(doubled);
  return result;
};

const final = compose(2);
// console.log("final", final);
