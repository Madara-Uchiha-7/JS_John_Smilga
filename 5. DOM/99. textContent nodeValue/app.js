// allows us to grab the text in the element

// nodeValue (bit tricky)
// textContent

const item = document.getElementById("special");

console.log(item);
// this will output following on the console
//<h1 id="special">This is special content</h1>  OR h1#special

// now to get nodeValue there are 2 ways
// as we know childNodes will give the text also then next child node then text and so on
// so item.chilNodes will give: NodeList [text]
// use index to get it
console.log(item.childNodes[0].nodeValue);

// or we can go with fist chind
console.log(item.firstChild); // first child will be text again
console.log(item.firstChild.nodeValue);

// textContent is easy
console.log(item.textContent);
