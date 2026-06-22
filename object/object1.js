let student1 = 
{
    name : "harsh",
    marks : 98
}

console.log(student1.name)
console.log(student1["name"])
console.log(Object.keys(student1))
console.log(Object.values(student1))
console.log(Object.entries(student1))

// * making a copy of one object 
let student2 = Object.assign({}, student1)
console.log(student2)
