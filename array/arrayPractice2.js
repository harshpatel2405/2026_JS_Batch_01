// * map -- returns new Array of same length as of original array
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2500 },
];

// ^ create a new Array which contains only product names
let nameArray = products.map((product) => {
  return product.name;
});
console.log(nameArray)

// ^ create a new array where price of the product is increased by 18% 
let increasedPriceArray = products.map((product) => product.price *= 1.18)
console.log(increasedPriceArray)