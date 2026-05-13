// * print 1 to n
let n = 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// * sum of 1 to n
// let sum // undefined
let sum = 0
for (let i = 1; i <= n; i++) {
    sum += i
    // sum = sum  + i
}
console.log("Sum of natural numbers till 1 to " + n + " is " + sum)

// * base , power - exponent  (5 ^ 3 ==> 5 * 5 * 5 ==> 125)
/*
*  1 * 5 = 5
*  5 * 5 = 25
*  25 * 5 = 125
*/
let base = 5
let power = 3
let exp = 1
for (let i = 1; i <= power; i++) {
    exp *= base
}

console.log(base + " ^ " + power + " = " + exp)

// * Multiplication of n to 1 (factorial)
// * multiplication table of n
/*
*    5 * 1 = 5
*    5 * 2 = 10
*    5 * 3 = 15
*    5 * 4 = 20
*    5 * 5 = 25
*/