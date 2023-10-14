// assign to avribale and then use that varibale
// bcz we may need to use that node or nodeList again and again
const h1 = document.getElementById("title");
h1.style.color = "red";

// return type is HTMLCollection(array like object)
// of getElementByTagName
// even if there will be only one tag
// so access them using indexes
const h2 = document.getElementsByTagName("h2");
h2[0].style.color = "blue";

// indexing / length property will work on this
// but not array like methods (forEach)

// its better to use querySelector() in such cases
// the forEach will work on it
// the return result we get is in node list from querySelector()
// node list allows to use forEach while HTMLCollection does not

// but for both of them we can convert them to array
// so we can use any array properties and methods

// using spread operator will convert them to array
// i.e.    [...]  operator

const convertedItems = [...h2];
// console.log(typeof h2);
// console.log(typeof convertedItems);
console.log(h2);
console.log(convertedItems);
convertedItems.forEach(function (item) {
  console.log(item);
});

// lets work on get Elements By Class Name
// also returns HTMLCollection

const listItems = document.getElementsByClassName("className");
console.log(listItems);

const convertedListItems = [...listItems];
console.log(convertedListItems);
