let arr = [10, 20, 30, 40];
console.log(arr);

// * deletes 2 element from index 1
// arr.splice(1, 2);
// console.log(arr);

// * insert 11 and 44 after removing two elements starting from index 1
// arr.splice(1,2,11,44);
// console.log(arr);

// * replace element of index 1 after removing 1 element after index 1
// arr.splice(1,1,34);
// console.log(arr)

// * slice
// console.log(arr.slice(1, 3));
// let newData = arr.slice(1,2);
// console.log(newData)
// console.log(arr)

// * flat
let num = [10, [21, 32, 45], 30, 40];
console.log(num.flat());

let num1 = [
  [10, 20, [21, 31]],
  [34, 45, [56, 67, 88, [89, 78]]],
];
console.log(num1);
console.log(num1.flat(3));

// * map , flat
// newData = arr.map((a) => [a, Math.pow(a,2)]).flat();
newData = arr.map((a) => [a, Math.pow(a,2)]);
console.log(newData.flat())

// * isArray 
let a = 10;
console.log(Array.isArray(a))

// * from -- create array from iterable items 
let arr1 = Array.from("Harsh")
console.log(arr1)
