// finding the average of marks

const updatedStudents =
  students.reduce(function (scoresTotal, student) {
    return (scoresTotal += student.Marks);
  }, 0) / students.length;

console.log(updatedStudents);

// # Reduce chellenge 2
// create a new key value pair
// in which the key will be a subject name and value will be 1 if the key is new
// if that key subject alreaydy exist then update it with +1
const survey = students.reduce(function (survay, student) {
  // this will get the subject dynamically and we can use this varibale
  const fevSubject = student.subject;

  // if subject key already exist then if will return 1 or more
  // so automatically it becomes true
  if (survay[fevSubject]) {
    // lets add the +1 that key's value
    survay[fevSubject] += 1;
  } else {
    // create new key of current subject and assign 1 to it
    survay[fevSubject] = 1;
  }
  return survay;
}, {});

console.log(survey);
