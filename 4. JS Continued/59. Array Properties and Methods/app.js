let names = ["kapil", "chinmay", "susan", "john", "temp"];

console.log(`All names are : ${names}`);
console.log(`Length of the array is ${names.length}`);
console.log(`Last array element is: ${names[names.length - 1]}`);

const lastNames = ["bhat", "borkar", "sussy", "jonney", "tempy"];
console.log(`All last names are : ${lastNames}`);

const allNames = names.concat(lastNames);
console.log(`All all names after concatination of arrays are : ${allNames}`);

console.log(`Reverse of array ${allNames.reverse()}`);

allNames.unshift("euu"); // at to first
console.log(`All all names after unshift is: ${allNames}`);

allNames.shift(); // remove first
console.log(`All all names after shift is: ${allNames}`);

allNames.push("last one"); // add to last
console.log(`All all names after push is: ${allNames}`);

allNames.pop(); // remove last
console.log(`All all names after pop is: ${allNames}`);

// splice mutates the original array, means it will return new array
// with selected values from used array
// and it will remove those values from used array
// This method is uesed to we grab the specific elements from array
// splice(starting index, how many to pick )
const specificNames = allNames.splice(2, 1);
// (2,1) : start from second index and pick only one
console.log("Splice method: ");
console.log(specificNames);
console.log(allNames);
