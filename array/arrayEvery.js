// * every is used to check whether the condition applied is true for all elements or not

let num = [10, 20, 30, 40, 50];

// * does all members of num array are divisble by 2 ?
const newData = num.every((n) => n % 3 != 0);
console.log(newData);
