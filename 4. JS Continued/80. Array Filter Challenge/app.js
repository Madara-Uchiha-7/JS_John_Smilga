const updatedStudents = students.filter(function (currItem) {
  if (currItem.Marks >= 80) return currItem;

  // we can also return as below too
  // reutrn currItem.Marks >= 80
  // now how come this workd
  // bcz currItem.Marks >= 80 : this is the condition and it evaluates to true
  // remember that,in callbacks(I think all callbacks), a value that coerces to true/false will be returned
  // obtain (something) from someone by using force or threats.
});

console.log(updatedStudents);
