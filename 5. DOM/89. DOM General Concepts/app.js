document.body.style.backgroundColor = "blue";
document.body.style.color = "yellow";

document.getElementById("btn").style.color = "red";

/*
we can assign the values to a varibale 
const element = document.getElementById('element');
we will receive a node object or node list, which is an array like
object. Array like objs means we can use some array methods on it 
and some will not work. But we can convert node to array.

Now, where is this document coming from
So, once we setup our JS file and once we include it in out index.html,
we will have access to global window object
You can check it using console.log(window);
There will be multiple properties and method related to that global
window object
Once printing this on console
console.log(window);
extend it on console to see all of its properties and methods
we can check like this of all the node and nodeList 

Now, in this window object 
if you scroll below after extending it 
you will find a document property
That document property again itself is object bcz 
it also has its own methods and properties

*/

/* 
document.body.style.backgroundColor
here document.body returned a node of body 
the node object has its own properties and methods
one of them is style
So following are some of them
nodeName
style
See following eg:
*/
const btn = document.getElementById("btn");
// now btn will have node of that specific area/ field/ element
const name = btn.nodeName;
const css = btn.style;
// now this style also has its own properties and methods
// check them in console by extending them
console.log(name);
console.log(css);
