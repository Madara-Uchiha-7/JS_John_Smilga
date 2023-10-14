// reduce
// iterates over the values
// it reduces to a single value - number or array or object..etc
// our callback function will take the 2 parameters
// 1 Parameter ('acc') - total of all calculations    (acc is for accumelator)
// 2 Paramter  ('curr')- current iteration/ value

const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 100 },
  { name: "peter", age: 21, position: "designer", id: 2, salary: 200 },
  { name: "susy", age: 26, position: "the boss", id: 3, salary: 300 },
  { name: "susan", age: 26, position: "the boss", id: 4, salary: 400 },
];

// call back function will be our 1st argument
// and second argument will tell what value we want to return,  number or array or object..etc
const total = people.reduce(function (acc, currItem) {
  console.log(`Total ${acc}`);
  console.log(`Current Money: ${currItem.salary}`);
  acc += currItem.salary;
  // always you will want to return the accumelator
  return acc;
}, 0);
// this 0 will be provided as a initial value to acc
// which we can update in the reduce method
// if we do not update it, then for each iteration it stays the default on
// in this case it will be 0

console.log(total);

/*
q:
I'm  a little confused.  Normally in a code block, if you use a return statement you leave the block 
(and the function).  
In reduce however, it looks like the iterations continue even if the return statement is encountered. 
Is this true?

Ans:
Hmm. It sounds like you are thinking about return early approach.

The callback function inside of the reduce method is just another regular function.

The loop is not inside callback function, reduce method calls callback function for every item in the loop. 
Return keyword does not break out of the loop, it just returns the value.

And the same is going to be for any other function, unless you have early return (which negates all the code after), 
return at the end of the function just returns value.
*/
