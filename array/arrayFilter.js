let arr = [10, 20, 30, 40, 50];

newArr = arr.filter((a) => a > 20);
console.log(newArr);

const students = [
  {
    name: "Ram",
    age: 14,
    marks: 85,
    standard: 9,
  },
  {
    name: "Raghav",
    age: 15,
    marks: 97,
    standard: 10,
  },
  {
    name: "Purushottam",
    age: 16,
    marks: 99,
    standard: 11,
  },
];

// * make array of only those who have marks greater than 90
function getAbove(student) {
  if (student.marks > 90) {
    return student.name;
  }
}

// * will return me json
marksArray = students.filter((student) => getAbove(student));
console.log(marksArray);

// marksArray = students.filter((student) => getAbove(student)).map((m) => m.marks); // * this is also valid
marksArray = students.filter((student) => getAbove(student));
// newMarksArray = marksArray.map((m) => m.marks)
newMarksArray = marksArray.map((m) => "Pass");
console.log(newMarksArray);
