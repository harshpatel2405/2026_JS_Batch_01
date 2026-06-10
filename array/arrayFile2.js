// let num = ["apple",12,"parrot",45.56,true] // * this is allowed

let num = [10,20,30,40,50]
console.log(num)

// * push -- adds element at last 
num.push(11)
console.log(num)

// * pop - removes element from last 
num.pop()
console.log(num)

// * Task 1 : print sum of all elements of the array

// * add 99 in the last position of num 
// num[num.length] = 99; // * this is also valid
num.push(99);

console.log(num)

// * shift -- removes element from first position 
console.log(num.shift() + " is shifted (deleted)")
console.log(num)

// * unshift -- adds element at first position
num.unshift(123)
console.log(num)