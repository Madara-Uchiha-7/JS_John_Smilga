const heading = document.querySelector("h2");
console.log(heading.parentElement); // second

console.log(heading.parentElement.parentElement); // result

// body
console.log(heading.parentElement.parentElement.parentElement);

// html
console.log(heading.parentElement.parentElement.parentElement.parentElement);

// if no parent  element then we get null

// Note to remember
// if we use color property on div
// then all the tags which has text in in will get color change
