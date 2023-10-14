const person = {
  name: "John",
  lastName: "Cena",
  age: 27,
  education: "PG",
  married: false,
  siblings: ["one", "two", "three"],
  greeting: function () {
    console.log("Hello there");
  },
};

console.log(person); // printing the Object
console.log(person.siblings[2]);

// Calling the function
// console.log(person.greeting());
// do not call this function like this becasue it is not returning anything and we already have console.log in it to
// print the content
// otherwise on console we will get
// Hello There and undefined both bcz, Hello there is what function printing and
// undefied is what function returned bcz we called it inside the console.log
// So call it like below:
person.greeting();
//
person.age = 28;
console.log(person.age);
console.log(person); // printing the Object
// in ES6 they have done one change
// to call a function inside Object, you don't need to write the function keyword
/*
const person = {
  name: "Chinmay",
  lastName: "Borkar",
  age: 27,
  education: "PG",
  married: false,
  siblings: ["one", "two", "three"],
  greeting() {
    console.log("Hello there");
  },
};
person.greeting();
*/

// we can add new key and value to already existing array Object by
// Object.newkey = Value
// or
// store a newKey in one varibale called newKeyVariable
// Object[newKeyVariable] = value;
// this way it can be dynamic too

// i think it is not only to assing a new key value but also to alter existing one too
