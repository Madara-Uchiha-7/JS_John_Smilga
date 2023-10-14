function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

const add = function addValues(num1, num2) {
  return num1 + num2;
};
const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue, add(5, 6)];

console.log(values);

// put function expression on ice for a while bcz we havent convered the hosting yet
// so we might get some bugs
//-----------------------------------------------------------

// in ES6 they have come up with something called arrow functions
// syntax: let/ const varNameForArrowFuntion = (parameters if any) => operation;
const multiply = (num1, num2) => num1 * num2;
const values1 = [multiply(5, 6)];

console.log(values1);
// -------------------------------------------------------------------

// there are also libraries in JS in which you may see funtion expression like this
// if you want to interact with these api the libraries then you have to write
// the functions in following way i.e. function expression
/*
exports.nameOfMethod = function(){
    
}
*/
