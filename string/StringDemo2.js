// charCodeAt
// fromCharCode

// * character into ascii
let str = "Good Morning"
console.log(str.charCodeAt(10))

// * ascii into character
console.log(String.fromCharCode(72))

// *  will print a-z from ascii
for(let i = 97; i <= 122;i++)
{
    console.log(String.fromCharCode(i))
}

// * printing string data using loop
let name = "Krishna Yadav"
for(let i = 0; i <name.length;i++)
{
    console.log(name[i])
}



