//prepend
//innerText = allows us to set text reight away without creating a
// text node and appending it to the element

// adding heading two
const heading = document.createElement("h2");
heading.innerHTML = "Hi this is H2 using innerHTML";

// (when we do document.body.appendChild)
// appendChild add the end of the body element
// prepend adds before the body element
// previously when we used append it was end of the script tab of
// html (when we did document.body.appendChild)

document.body.prepend(heading);
// this will add after <body>
