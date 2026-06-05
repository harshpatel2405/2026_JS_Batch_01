const add = (a, b) => {
  return a + b;
};

console.log(add(5, 4));

const subtract = (a, b) => a - b;
console.log(subtract(5, 4));

function getMultipleData(...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}

getMultipleData(10, 20, 30, 40);

// * higher order function -- 
// * which gets function as an argument
// * which returns function

function operation(a, b, func) {
  func(a, b);
}

function getSum(a,b) {
    
  console.log(`Sum of ${a} and ${b} is ${a + b}`);
}

operation(5,2,getSum)

// * nested function 
// * recursive function