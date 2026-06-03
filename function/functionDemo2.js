// *  function expression
let msg = function (msg) {
  console.log("The message from GOD is '", msg, "'");
};

msg("Stay United");

// * arrow function
let greet = (user) => {
  console.log("THis is a greet message from ", user);
};

greet("Ram");

const add = (a, b) => a + b;
console.log("Add(5,2) : ", add(5, 2));

// * Rest Parameter
function total(...numbers) {
  console.log(numbers);
}
total(190, 20, 34, 5, 6);

// * callback function
function Shiva(name, callback) {
  console.log("Name : " + name);
  callback();
}

function Ram() {
  console.log("Ram ke Aaradhya Shiva hai");
}

Shiva("Shankar Mahadev", Ram);

// * recursion function  -- function calling itself
function addition(n) {
  if (n == 0) {
    return 0;
  }
  console.log(n + " + addition(" + (n-1) + ")")
  return n + addition(n - 1);
}

console.log(addition(10))
