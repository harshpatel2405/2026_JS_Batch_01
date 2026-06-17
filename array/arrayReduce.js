// * reduce -- whole output into single one
// * accumulator -- something which will store your accumulated/last output
num = [10, 120, 30, 50, 90];

const sum = num.reduce((acc, curr) => {
  console.log(`Iteration : acc : ${acc}, curr : ${curr}`);
  return acc + curr;
}, 0);

console.log(sum);

// * finding max
const max = num.reduce((acc, cur) => {
  console.log(`Iteration : acc : ${acc}, cur : ${cur}`);
  return acc > cur ? acc : cur;
}, 0);
console.log(max);
