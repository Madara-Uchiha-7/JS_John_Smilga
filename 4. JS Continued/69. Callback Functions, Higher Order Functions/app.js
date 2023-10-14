// Functions are the First class Objects or First class Citizens in JS
// i.e. - stored in variable (expression), passed as a argument to another function,
// return from a function (closure)

// There are higher order functions
// i.e. - Accepets another function as argument or returns another function as result

// CallBack function - passed to another function as an argument or executed inside that
// function

// this will be a call back function
function morning(name) {
  return `Good Morning ${name.toUpperCase()}`;
}
// this will be a call back function
function afternoon(name) {
  // string.repeat(number): repeats the string given number of times
  return `Good Morning ${name.repeat(3)}`;
}

// cb parameter will grab out method coming from argument
function greet(name, cb) {
  // we can use cb here too
  // cb(name);
  const myName = "Chinmay";
  console.log(`${cb(name)}, my name is ${myName}`);
  // we can use cb here too
  // cb(name);
}

// as we can see we are passing callback function morning as
// an argument
// nut we are not passing the arguments which are needed in the callback function
// because we want to use it in the greet function.
// so we grabed this function in cb
// and then we used cb and then passed the arguments.
greet("Bobo", morning);
greet("Peter", afternoon);
