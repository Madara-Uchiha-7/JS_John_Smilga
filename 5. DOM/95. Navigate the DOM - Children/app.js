// child nodes returns all theh child nodes
// including whitespace which is treated as a text node

const result = document.querySelector("#result");
const allChildren = result.childNodes;
console.log(allChildren);
// we will get the 11 bcz it is selecting the text as a node also
// to avoid this use children property
const children = result.children;
console.log(children);
console.log(children[0].textContent);

//firstChild and lastChild Property will give a text node in this case

// remember that we can directly use these varible in the console
