/* 
5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 },
  { name: "Diana", age: 30 },
  { name: "Ethan", age: 27 },
];

function updateAgeByName(arr, name, newAge) {
  const updated = arr.map((person) => {
    if (person.name === name) {
      return { ...person, age: newAge };
    }
    return person;
  });
  return updated;
}

const updatedPerson = updateAgeByName(people, "Alice", 1000);
// console.log("updatedPerson", updatedPerson);
