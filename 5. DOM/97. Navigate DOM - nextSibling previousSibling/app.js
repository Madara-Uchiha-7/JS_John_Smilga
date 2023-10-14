// they do return the white space

const fisrt = document.querySelector(".first");
console.log(fisrt);
const second = fisrt.nextSibling; // we will get white space
console.log(second.nextSibling);

const last = document.querySelector("#last");
console.log(last);
const secondLast = last.previousSibling; // we will get white space
console.log(secondLast.previousSibling);

// if no sibling then we get null
