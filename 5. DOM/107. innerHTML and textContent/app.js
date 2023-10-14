const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

// will return text
console.log(div.textContent);
// will give both the lists inside first i.e. whole html text
// which is inside the tag
console.log(first.innerHTML);
// first.textContent
// will go to its child elements i.e. li and
// will give text inside them

// lets create another unordered list
const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">list item</li>
      <li>list item</li>`;
document.body.appendChild(ul);
