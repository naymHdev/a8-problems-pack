/* 
1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

*/

const persons = [
  {
    name: "Pelé",
    age: 82,
    gender: "Male",
  },
  {
    name: "Marta Vieira da Silva",
    age: 38,
    gender: "Female",
  },
  {
    name: "Diego Maradona",
    age: 60,
    gender: "Male",
  },
  {
    name: "Birgit Prinz",
    age: 46,
    gender: "Female",
  },
  {
    name: "Lionel Messi",
    age: 37,
    gender: "Male",
  },
];

const maleNames = persons
  .filter((person) => person.gender !== "Female")
  .map((person) => person.name);
console.log("maleNames", maleNames);
