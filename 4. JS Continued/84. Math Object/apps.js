// Math is standard built in object

let number = 4.5453;
console.log(`Number ${number} & floor: ${Math.floor(number)}`);
number = 4.1;
console.log(`Number ${number} & ceil: ${Math.ceil(number)}`);
number = 4.5453;
console.log(`Number ${number} & round: ${Math.round(number)}`);
number = 4.1;
console.log(`Number ${number} & round: ${Math.round(number)}`);
number = 4.5453;
console.log(`Number ${number} & sqrt: ${Math.sqrt(number)}`);

console.log(`PI ${Math.PI}`);

console.log(`Min ${Math.min(5, 3, 3, 5, 6, 1)}`);
console.log(`Max ${Math.max(1, 2, 3, 4, 5, 10, 4)}`);

console.log(`Radom ${Math.random()}`); // range 0 -1 : 0 is included and 1 is excluded
// want range 0 - 10 instead of 0 to 1 then multiply by 10
// eg:
console.log(`Radom*10 ${Math.random() * 10}`);
/*
there is still a prob 
that the random is returning too many decimals 
plus since it includes 0 and exclueds 1,
we will get the range of 0 -9  not 0 -10

so we can fix this by:

Math.floor(Math.random() * 10)
this will remove the decimals but range will be 0 - 9 
bcz 9.99999999 will also get convevrted to 9 beause of floor

Math.ceil(Math.random() * 10)
this will remove the decimals but range will be 1 - 10 
bcz 0.0000000001 will also get convevrted to 1 beause of ceil

Math.floor(Math.random() * 10) + 1
this will remove the decimals but range will be 1 - 10 

*/
