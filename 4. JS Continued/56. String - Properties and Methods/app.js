let text = "Chinmay Borkar";
let result = text.length; // here length will be property

console.log("Original string: " + text);
console.log("The length of string is: " + result);

// I think when we use () with . operator then its method
// And if we  do not use () with . operator the its a length

console.log("To Lower: " + text.toLowerCase());
console.log("To Upper: " + text.toUpperCase());
console.log("Char at 0th index: " + text.charAt(0));
console.log("Char at last index: " + text.charAt(text.length - 1));

// we get -1 if not found
// indexOf also considers index 0 as a start
console.log("Printing index of 1st occurence of r :" + text.indexOf("r"));

text = "Chinmay Borkar    ";

console.log("Updated string: " + text);

// text.trim() returns the trimied string
// here we are not capturing it, only printing it
// so original string has not changed
console.log("String after removing the whitespaces: " + text.trim());
console.log(text);

text = "Chinmay Borkar";
console.log("Updated string: " + text);
console.log("Does string starts with 'Chinmay': " + text.startsWith("Chinmay"));
console.log("Does string has 'nmay': " + text.includes("nmay"));

//string.slice(start, stop);
// start: includes the staring character
// stop: does not include stop index character
console.log("Slice method: " + text.slice(3, 7));

console.log("Slice method end of string: " + text.slice(-1));

console.log("Slice method, last 3 characters: " + text.slice(-3));
