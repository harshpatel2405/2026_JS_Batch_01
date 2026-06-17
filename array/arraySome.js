 // *some is used to check if any member satifies the condition then it is true

let num = [10,11,112,123,14]

// * does num array has any member which is divisible by 2 ? 
let newData = num.some(n => n % 13 == 0);

console.log(newData)