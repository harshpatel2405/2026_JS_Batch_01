// * if 
//  * 1.  Task : Check age is greater than 18

let age = prompt("Enter your age (if)")

if (age >= 18) {
    console.log("Your age is greater than 18")
    document.write("<b>Your age is greater than 18 </b>")
}

// * if_else 
// * Task : Check whether the entered number by user is even or odd

let num = prompt("Enter a number (if_else)")

if (num % 2 == 0) {
    console.log(num, "is even")
}
else {
    console.log(num, "is odd")
}

// * else if ladder 
// * Check whether the entered number by user is positive, negative or zero

let number = prompt("Enter a number (else if ladder)")

if (number > 0)
    console.log(number, "is positive")
else if (number < 0)
    console.log(number, "is Negative")
else
    console.log(number, "is Zero")

// * nested if_else
// * check which number is greater from three numbers 

let a = prompt("Enter First Number (Nested If_else)")
let b = prompt("Enter Second Number (Nested If_else)")
let c = prompt("Enter Third Number (Nested If_else)")

if (a > b)
    if (a > c)
        console.log("A is max")
    else
        console.log("C is max")
else
    if (b > c)
        console.log("B is max")
    else
        console.log("C is max")