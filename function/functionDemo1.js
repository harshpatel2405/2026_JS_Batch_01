function greet() {
  console.log("Hello Ram");
}

greet();

function add(a, b) {
  console.log(`Sum of ${a} and ${b} is ${a + b}`);
}
add(12, 5);

function subtract() {
  let a = 45;
  let b = 20;

  return a - b;
}

console.log(subtract());

function multiply(a, b) {
  return a * b;
}

console.log(multiply(10, 8));

let ans = function divide(a, b) {
  return a / b;
};

console.log(ans(3, 2));

function addition(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

console.log(addition(12, 13, 34, 11));

function welcome(name = "User") {
  console.log("Welcome to the Jungle,", name);
}

welcome("Harry");
