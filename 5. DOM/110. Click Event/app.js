// step:
// select event
// addEventListner(which event, callback function)
// what event, what are we gonna do after triggering of an event

// grab the button
const btn = document.querySelector(".btn");
// now wehave node obj

const heading2 = document.querySelector("h2");

// Approch 1
// btn.addEventListener("click", function () {
//   heading2.classList.add("red");
// });

// Approch 2
// function reference

function changeColors() {
  if (heading2.classList.contains("red")) {
    heading2.classList.remove("red");
    heading2.classList.add("blue");
  } else {
    heading2.classList.remove("blue");
    heading2.classList.add("red");
  }
}
btn.addEventListener("click", changeColors);
// as we know we dont invoke callback in the argument
// bcz we dont want it to run right away
// btn.addEventListener("click", changeColors());
