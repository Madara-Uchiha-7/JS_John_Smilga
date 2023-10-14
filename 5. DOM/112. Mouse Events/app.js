//click = fires after full action occures
// mousedown = button is pressed
// mouseup = button is released
// firing event willl happen like below:
//mousedown then mouseup and then click

// mouseenter = moved onto an element
// mouseleave = move out of an element

const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("You clicked me");
});
btn.addEventListener("mousedown", function () {
  console.log("down");
});
btn.addEventListener("mouseup", function () {
  console.log("up");
});
heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});
heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
