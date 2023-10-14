const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
// we can also add our custom date
// const date = new Date(1/12/2014);
// it will automatically pick this up and
// we can still use below functions for this

console.log(`Todays date is ${date}`);

const month = date.getMonth();

// note month will be returned in number
// also it starts from index 0
// eg: jan will be 0
// april will be 3 not 4
console.log(`Current month is ${months[month]}`);

const day = date.getDay();

// note day will be returned in number
// also it starts from index 0
// eg: Sunday will be 0
// Saturday will be 6 not 7
console.log(`Current day is ${days[day]}`);

console.log(date.getDate()); // give the date i.e. in 1 - 31

console.log(date.getFullYear()); // gives year

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
