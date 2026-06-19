// * for each -- iteration
const students = [
  { id: 1, name: "Amit", marks: 78 },
  { id: 2, name: "Priya", marks: 92 },
  { id: 3, name: "Rahul", marks: 65 },
  { id: 4, name: "Sneha", marks: 88 },
];

// ^ print name
students.forEach((student) => {
  console.log(student.name);
});

// ^ Student : Amit | Marks : 78
students.forEach((student) => {
  console.log("Student : " + student.name + " | Marks : " + student.marks);
});

// ^ count how many students have score above 80
let count = 0;
students.forEach((student) => {
  if (student.marks > 80) {
    count++;
  }
});

console.log("Number of students who have scored above 80 is/are : " + count);
