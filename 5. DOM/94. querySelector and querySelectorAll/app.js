// selects the element or group of elements
// decide the effect we want to apply to the selection

// querySelector('any css') : selects single element
// querySelectorAll('any css') : selects all

// we can pass any css to this
// starting from id to most complecated css selector

// we can use forEach to this

// its better to use these instead of getElement... methods
// bcz this one also does the work of getElement... methods

// for id access add #
const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

// use . for class access
// even though there can be multiple classes with same name
// it will return first one only, not the node list
// bcz it is not the querySelectorAll
const item = document.querySelector(".special");
console.log(item);

// below line is selecting last tag of li tags
const lastItem = document.querySelector("li:last-child");
console.log(lastItem);

//
const items = document.querySelectorAll(".special");
console.log(items);
items.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
