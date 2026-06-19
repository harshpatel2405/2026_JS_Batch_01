let num = [2, 4, 6, 8, 11];

//  * for each - iteration
num.forEach((n) => {
  console.log(n);
});

let newData = num.filter((n) => n % 2 == 0);
console.log("Filter : " + newData);

// * some - if any of the element satisfies condition (OR)
let ans = num.some((n) => n % 2 == 0);
console.log("Some  : " + ans);

//  * every - if all of the element satisfies conditin (AND)
ans = num.every((n) => n % 2 == 0);
console.log("Every : " + ans);

//  * find -- it will return you first occurence which true for the condition
ans = num.find((n) => n > 55);
console.log(ans);

// * reduce - will return you a single value
ans = num.reduce((acc, curr) => {
  console.log(`acc = ${acc} + ${curr} = ${acc + curr}`);
  return acc + curr;
}, 0);

console.log(ans);