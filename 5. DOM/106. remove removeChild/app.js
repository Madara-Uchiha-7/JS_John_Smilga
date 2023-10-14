// remove : remove element
// removeChild :remove child

const reuslt = document.querySelector("#result");
result.remove();

const headingTwoDiv = document.createElement("div");
headingTwoDiv.classList.add(".red");

const headingTwo = document.createElement("h2");
const textForHeadingTwo = document.createTextNode("head 2");
const headingThree = document.createElement("h3");
const textForHeadingThree = document.createTextNode("head 3");

headingTwo.appendChild(textForHeadingTwo);
headingThree.appendChild(textForHeadingThree);

headingTwoDiv.appendChild(headingTwo);
headingTwoDiv.appendChild(headingThree);
// trying new method called append
// to check if it works or not
// insted of appendChild()
document.body.append(headingTwoDiv);
// worked same as appendChild, but I
// only added this to document.body bcz
// thats how we added prepend

// *****************************-----Note----*********************
// lets remove the child node
// lets get the parent node
const parent = document.querySelector(".red");
console.log(parent);
// now we have the parent in the node format
// const child = parent.querySelector("h2");
// console.log(child);
/*
Some how I am getting null for
document.querySelector(".red");
IT SEEMS WE DONT GET THE NODE USING querySelector 
OR getElementByClassName BECUASE WE HAVE ADDED IT DYNAMICALLY

BUT

NO NEED TO WORRY BECAUSE WE ALREADY HAVE THAT NODE WHILE WE 
CREATED IT AND ADDED IT IN THE VAIRBALE
I.E. headingTwoDiv
*/
console.log(headingTwoDiv);
headingTwoDiv.removeChild(headingTwo);
