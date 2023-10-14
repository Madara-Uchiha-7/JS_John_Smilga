// now we know that anything using inside the tag's <> brackes and
// after the tag name will be the attribute
// we can get those attributes of that specific tag

const first = document.querySelector(".first");
// here tag with class of first will go in first and
// we will access this tags attributes
// here attributes of this class are id and class
const classValue = first.getAttribute("class");
const idValue = first.getAttribute("id");
console.log(classValue);
console.log(idValue);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

// printing total classes with the name first
let links = document.querySelectorAll(".first");
console.log(links);

// lets grab the last item
const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = " I also have a class of first";

// printing total classes with the name first after using setAttribute to last
links = document.querySelectorAll(".first");
console.log(links);
