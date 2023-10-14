const text = "some text";
const number = 45;
const value1 = true;
const value2 = false;
const resutl = null;
let name;

console.log(typeof text);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);

// now even if the data type od result is Null
// it will print the objcet as the answer
// this is the bug which exists from the start of the JS
// thats why they dont change it bcz so many codes uses Null as Object
// of eg. in if condition if (typeof varible == Object)
// even thought it is null data type many codes now check it as Object
console.log(typeof resutl);

// as we can see name does have any value initialized
// yes it prints the type of as undefined instead of null
// so null and undefined are same yet they are completely not same
console.log(typeof name);
