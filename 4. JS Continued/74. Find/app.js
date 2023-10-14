const people = [
  { name: "bob", age: 20, position: "developer", id: 1 },
  { name: "peter", age: 21, position: "designer", id: 2 },
  { name: "susy", age: 26, position: "the boss", id: 3 },
];

// find returns single instance - ( in this case object)
// returns first match
// if no match then returns the undefined
// great for getting unique vavlues

const person = people.find(function (person) {
  return person.id === 3;
});

console.log(person);

// filter will return array
const person1 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person1);
