let str1 = "Hello World"    // * double quotes
let str2 = 'Namaste Duniya' // * Single quotes
let str3 = `Hello Duniya`   // * template literals

console.log(str1)
console.log(str2)
console.log(str3)

let name = "harsh";

// length -> string.length
console.log("1. Length of " + name + " is " + name.length)

// access 
console.log("2. Character at 2nd index of " + name + " is " + name[2]);

// toUpperCase
console.log("3. Uppercase of " + name + " is " + name.toUpperCase())

// toLowerCase
console.log("4. Lowercase of " + name + " is " + name.toLowerCase())

// trim -- removes spaces from starting and ending of the string 
console.log("5. Trim of " + name + " is " + name.trim());

// substring
console.log("6. Substring of 0th to 4th index in " + name + " is " + name.substring(0, 4));

// slice
console.log("7. Slice of 0th to 4th index in " + name + " is " + name.slice(0, 4));

// replace 
console.log("8. Replace h in " + name + " with m , it becomes " + name.replace('h', 'm'))

// replaceAll
console.log("9. Replace all h in " + name + " with m , it becomes " + name.replaceAll('h', 'm'))

// includes 
console.log("10. Includes a in " + name + " :  " + name.includes('a'))

// indexOf
console.log("11. Index of h in " + name + " is " + name.indexOf('h'))

// lastIndexOf
console.log("12. Last Index of h in " + name + " is " + name.lastIndexOf('h'))

// startWith
console.log("13. " + name + " startsWith h : " + name.startsWith('h'))

// endsWith
console.log("14. " + name + " endsWith r : " + name.endsWith('r'))


let newString = "Hello " + "World";
console.log("New String After Concatenation : " + newString)


// split - to seperate 
let fruits = "Apple,Banana,Mango"
console.log(fruits.split(","))

// join - to join the strings
console.log("join : " + ["apple", "banana", "chikooo"].join("-"));