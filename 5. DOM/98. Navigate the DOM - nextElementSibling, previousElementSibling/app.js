// no need to worry about white space here
const fisrt = document.querySelector(".first");

fisrt.nextElementSibling.style.color = "red";

const last = document.querySelector("#last");

last.previousElementSibling.style.color = "red";
console.log(last.nextElementSibling);
// if not found any then we get null
