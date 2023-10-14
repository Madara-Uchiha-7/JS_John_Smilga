// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// const nameInput = document.querySelector("#name");
const nameInput = document.getElementById("name");
// nameInput.addEventListener("keypress", function () {
//   console.log("You are using keypress event");
// });

//below will keep on trigerring till you hold down the key
// nameInput.addEventListener("keydown", function () {
//   console.log("You are using keydown event");
// });

// lets grab the value which is in the input
nameInput.addEventListener("keyup", function () {
  // we have a node in nameInput so we can grab its properties
  console.log(nameInput.value);
});
