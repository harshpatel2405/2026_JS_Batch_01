// Digits 
let n = 1324
let temp = n

// ^  print  , count
// * number keeps on decrementing 
let count = 0
while (n > 0) {
    let ld = n % 10; // * returns remainder (which is last digit of the number)
    console.log(ld)

    count++; // * count = count + 1
    n = parseInt(n / 10) // * converts point value into integer
}
console.log(`Number of digits in ${temp} is ${count}`)

// ^ sum
n = temp
let sum = 0
while (n > 0) {
    let ld = n % 10; // * returns remainder (which is last digit of the number)

    sum = sum + ld; // sum += i
    n = parseInt(n / 10) // * converts point value into integer
}
console.log(`Sum of digits of ${temp} is ${sum}`)


// ^ multiplication
n = temp
let mul = 1
while (n > 0) {
    let ld = n % 10; // * returns remainder (which is last digit of the number)

    mul = mul * ld; // sum += i
    n = parseInt(n / 10) // * converts point value into integer
}
console.log(`Multiplication of digits of ${temp} is ${mul}`)

// * reverse - palindrome
n = temp
let rev = 0

while (n > 0) {
    let ld = n % 10;
    // * console.log("rev = " + rev + "  * 10  + " + ld + " = " + (rev * 10 + ld))
    rev = rev * 10 + ld;
    n = parseInt(n / 10);
}

console.log("Reverse = " + rev)
if (rev == temp)
    console.log("Palindrome : YES")
else
    console.log("Palindrome : NO")

// * finding max 
n = temp
let max = n % 10; // & last digit

while (n > 0) {
    let ld = n % 10
    if (max < ld) {
        max = ld;
    }
    n = parseInt(n / 10)
}
console.log("Maximum digit in " + temp + " is " + max)