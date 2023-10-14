// adding elements dynamically
// createElement('element');
// createTextNode('text node');
// element.appendChild(childElement);
// append child is not only method which we  can use
// inserBefore('element', 'location');
// we will still use appendChild to add the textNode into element
// however to add that element to other element we will use this
// insertBefore

const result = document.querySelector("#result");

// create empty element
const bodyDiv = document.createElement("div");
// create text node
const text = document.createTextNode("Simple Body Div");

// add text in bodyDiv
bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv); // we will use insertBefore
document.body.insertBefore(bodyDiv, result);
// since #result is in body, we used document.body

//-------------------------------------------------
const heading = document.createElement("h2");
const headingText = document.createTextNode("Dynamic Heading");
heading.appendChild(headingText);
// bodyDiv.appendChild(heading);
// heading.className = "blue";
heading.classList.add("blue");
// result.appendChild(heading); // we will use insertBefore
const first = document.querySelector(".red");
result.insertBefore(heading, first);
