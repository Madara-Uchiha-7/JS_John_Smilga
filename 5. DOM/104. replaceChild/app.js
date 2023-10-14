// replaceChild('new','old');

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

//--------------replaceChild---------------
const smallHeading = document.createElement("h6");
const smallText = document.createTextNode("I am small headin text");
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
