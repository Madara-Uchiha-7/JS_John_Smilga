// returns new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 21, position: "designer" },
  { name: "susy", age: 26, position: "the boss" },
];

const youngPeople = people.filter(function (person) {
  if (person.age < 25) {
    return person;
  }
  // shortcut
  // return person.age <25;
});
console.log(youngPeople);

// if no condition matches then the empty array will get created
