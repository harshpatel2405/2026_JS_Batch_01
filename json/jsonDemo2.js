// * json to object 
const jsonData = '{"name" : "Harsh", "age": 22}';

console.log(jsonData);
const jsObjectData = JSON.parse(jsonData);
console.log(jsObjectData);


// * object to json
const jsonData2 = JSON.stringify(jsObjectData)
console.log(jsonData2)
