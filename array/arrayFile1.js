let fruits = ["apple","banana","mango"]

// * accessing array 
console.log(fruits)

// * index access
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// * length 
console.log("Length of array is " + (fruits.length))

// * iterable 
for(let i = 0; i < fruits.length;i++)
{
    console.log(fruits[i])
}

// * update -- mutable 
fruits[2] = "Blueberry"
console.log(fruits)


// * not updating with const 
// const boysMarks = [20,45,56,78]
// console.log(boysMarks)
// boysMarks[2] = 222;
// console.log(boysMarks)

// const girlsMarks = [20,45,56,78]
// console.log(girlsMarks)
// girlsMarks[2] = 222;
// console.log(girlsMarks)

// ! error : cannot assign to constant variable
// boysMarks = girlsMarks;
// console.log(boysMarks)


