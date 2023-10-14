// adding elements dynamically
// createElement('element');
// createTextNode('text node');
// element.appendChild(childElement);
// appendChild will append the element we jsut created

const result = document.querySelector("#result");

// create empty element
const bodyDiv = document.createElement("div");
// create text node
const text = document.createTextNode("Simple Body Div");

// add text in bodyDiv
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement("h2");
const headingText = document.createTextNode("Dynamic Heading");
heading.appendChild(headingText);
// bodyDiv.appendChild(heading);
// heading.className = "blue";
heading.classList.add("blue");
result.appendChild(heading);
