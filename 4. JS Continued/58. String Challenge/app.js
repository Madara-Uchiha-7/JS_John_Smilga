const fullName = function (firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  const fullNameUpperCase = fullName.toUpperCase();
  return fullNameUpperCase;
};

console.log(fullName("Chinmay", "Borkar"));
// disadvantage of above code is if we swap the last name and first name
// function will then then print the first name as the last name and visa versa
// we can overcode this using objcets

const fullNameForObject = function ({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  const fullNameUpperCase = fullName.toUpperCase();
  return fullNameUpperCase;
};

console.log(
  fullNameForObject({
    lastName: "Borkar",
    firstName: "Chinmay",
  })
);
// OR
const name = {
  lastName: "Borkar",
  firstName: "Chinmay",
};

console.log(fullNameForObject(name));

// Now as you can see the order does not matter
