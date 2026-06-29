const arr = [10, 20, 30];

// ^ Array Destructuring

// * destructuring -- directly storing value of object
const a = arr[0];
const b = arr[1];

// * destructuring
const [c, d, e] = arr;
console.log(c);
console.log(d);
console.log(e);

// * 1st and 2nd element
const [f, g] = arr;
console.log(f);
console.log(g);

// * 1st and 3rd element  -- skip using extra comma
const [h, , j] = arr;
console.log(h);
console.log(j);

// ^ object destructuring
const student = {
  name: "Harsh",
  age: 22,
  marks: 45,
};

// let {name , age }= student;
// console.log(name , age)

// * if no such thing present or you want to ptovide default value
// let {name , address = "XYZ"} = student;
// console.log(name , address)

// console.log(student)


// * renaming key name 
let {name : fname, age} = student;
console.log(fname , age)