// * task : convert the elements of array into lowercase

let names = ["Shyam", "Madhav", "Keshav", "Krishna", "Banke Bihari"];

function convertToLowercase(name) {
  return name.toLowerCase();
}
// lowerCaseName = names.map((name) => name.toLowerCase());
lowerCaseName = names.map((name) => convertToLowercase(name));

console.log(lowerCaseName);

// * Task : make a json for students
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

console.log(students);
let standardOfStudents = students.map((student) => student.standard);
console.log(standardOfStudents);

