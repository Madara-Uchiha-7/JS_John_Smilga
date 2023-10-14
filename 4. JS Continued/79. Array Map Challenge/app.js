// add role property to the incomping Object

const updatedStudents = students.map(function (currItem) {
  currItem.role = "student";
  return currItem;
});

console.log(updatedStudents);
