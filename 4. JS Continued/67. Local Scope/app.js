// the var which uses let/ const and used in any block like function block
// i.e. function's curly braces, will have a local scope
// we can also define empty blocks to define the local scope varibales like follows

{
  // since we are not using the const/ let we can access the firstName
  // outside this block
  fisrtName = "Chinmay";
  console.log(fisrtName);
}
console.log(fisrtName);

{
  // since we are using the const/ let we can not access the firstName
  // outside this block
  let fisrtName = "Chinmay";
  console.log(fisrtName);
}
console.log(fisrtName);

// Hi will be a local scope but not for the inner function
function temp() {
  let str = "hi";
  function temp1() {
    console.log(str);
  }
  temp1(); // calling inner function from outer function
}
temp();
