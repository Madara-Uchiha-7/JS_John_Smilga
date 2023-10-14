// does not return a new Array
// does not change size of original array
// uses value from origonal array when making new one
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 21, position: "designer" },
  { name: "susy", age: 26, position: "the boss" },
];

// what you will return from this call back will go into ages
// it wil go one by one and a new array will get created
// it will work as per used size of array
const ages = people.map(function (person) {
  return person.age + 20;
});

console.log(ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    age: person.age + 20,
  };
});
console.log(newPeople);

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

// join the array using join()
//The join() method returns an array as a string.
//The join() method does not change the original array.
//Any separator(the one which will get added in each array element while
// concatination) can be specified.
// The default is comma (,)
// so here the string will get passed to the innerHTML
// of body tag.
// this print all 3 names in the array
// one by one one new line in H1 tag.
// on new line because h1 tag automatically takes us on new line

document.body.innerHTML = names.join("");

// it somehow overrided out h1 tag in html
