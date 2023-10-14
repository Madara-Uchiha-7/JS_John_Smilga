const heading2 = document.querySelector("h2");
console.log(heading2);
// use camel casing, don't use
// css style typinig eg: background-color
// and property values will be in ""

// heading2.style.backgroundColor = "blue";
// heading2.style.color = "white";
// heading2.style.fontSize = "3rem";
// heading2.style.textTransform = "capitalize";

//shortcut
// use css style typinig eg: background-color
// and property values will not be in ""
heading2.setAttribute(
  "style",
  "background-color : blue;\
    color : white;\
    font-size : 3rem;\
    text-transform : capitalize;"
);
