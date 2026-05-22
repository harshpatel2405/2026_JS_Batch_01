// * + -> numbers -> operation
console.log(5 + 4) //  * 9

// * + -> string -> concatenation
let a = "Hello"
let b = " World"
console.log(a + b)

// * reversing and checking palidrome
let str = "madam"
let revStr = ""
for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i]; // 
}
console.log(`Reverse of ${str} is '${revStr}'`)

if (str == revStr) {
    console.log(`${str} is palindrome`)
}
else {
    console.log(`${str} is not palindrome`)
}