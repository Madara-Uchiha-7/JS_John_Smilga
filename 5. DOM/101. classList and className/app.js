// adding css classes dynamically using JS
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

// className will allow us to see the name of the class
// also it will allow us to change a class name or add a new class name

const firstClassValue = first.className;
console.log(firstClassValue); // we  will get class name of this tag

second.className = "colors";
// to add more than one class to one tag
// use classList
// bcz if now you do second.className = 'text'
// then this will override the colors
// but if you already know which classes to add
// then this following can work
// second.className  'coolors text';

// classList will allow us to see the name of the class, return
// type is DOMTockenList [value: ""]
// also it will allow us to add a multiple new class name
console.log(third.classList);
third.classList.add("colors");
third.classList.add("text");
console.log(third.classList);

// line 25 and 26 can be shortened
// third.classList.add('text','colors');

// we can also remove classes like we added
third.classList.remove("text");

// we can also check if we have a class present or not
// using classList
let result = third.classList.contains("colors");
console.log(result); // returns true or false
