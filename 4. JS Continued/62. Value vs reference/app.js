// If you assign the primitive data variable to other veriable and
// change that other variable then it does not change the original varibale
// it is called as call by value

// It not same with non-premitive members. Its visa versa
// it is called as call by reference

const number = 1;
let number2 = number;
number2 = 10;

console.log(number, number2);

let person = { name: "Chinmay" };
let fullname = person;
fullname.name = "Sasuke";

console.log(person.name, fullname.name);

// in ES6 there is a way around it
// to avoid call by refrence in non premitive data type
let person1 = { name: "Chinmay" };
let fullname1 = { ...person1 };
fullname1.name = "Sasuke";
console.log(person1.name, fullname1.name);
