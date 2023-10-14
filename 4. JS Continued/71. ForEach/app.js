const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 21, position: "designer" },
  { name: "susy", age: 26, position: "the boss" },
];

// this will be used as a callback function
// the parameter will allow me to access each and every item the
// array
function showPerson(person) {
  console.log(person);
}

people.forEach(showPerson);

// direcrtly using annonimous function inside forEach
// rememer we are not invoking this function
// we are just passing the fuction this callback function to forEach as an argument
people.forEach(function (person) {
  console.log(person.age);
});
