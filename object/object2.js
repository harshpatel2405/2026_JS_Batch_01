let person = {
  name: "Armaan",
  age: 14,
};
console.log(person);

// * dot notation
console.log(person.name);

// * Square bracket  notation
console.log(person["age"]);

// * add properties
person.marks = 45;
console.log(person);

// * update
person.age = 97;
console.log(person);

// * delete
delete person.marks;
console.log(person);

// * objects -> keys
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// * creating copy of object
const person2 = Object.assign({}, person);
console.log(person2);

// const person3 = Object.assign({}, person , person2)
// console.log(person3)

// * properties
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("marks"));

key = "weight";
person[key] = 98;
console.log(person);

field1 = "marks";
field2 = "name";

let student = {
  [field1]: 98,
  [field2]: "Ram",
};

// console.log(student.field1)  // ! X not allowed
console.log(student[field1]);

// * spread operator
const student123 = { ...person };
console.log(student123);

// * merging using spread
const obj1 = { name: "Harsh" };
const obj2 = { age: 98 };

const obj3 = { ...obj1, ...obj2, marks: 56 };
console.log(obj3);


/*
* create this object
* 
* let student = {
*     name:"Rahul",
*     age:18
* };
* 
* Perform all operations one by one:
* 
* Add city = "Mumbai"
* Add marks = 90
* Update age to 20
* Delete city
* Print all keys
* Print all values
* Check whether marks exists
* Create a copy using Object.assign()
* Create another copy using spread operator
* Merge it with
*/