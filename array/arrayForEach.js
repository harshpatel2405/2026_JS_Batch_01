// * for each loop is used for iteration 

fruits = ["Apple", "Banana", "Mango", "Chikoo"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

const products = [
  {
    name: "Laptop",
    price: 45000,
  },
  {
    name: "mobile",
    price: 50000,
  },
];
sum = 0;
products.forEach((p) => {
  sum += p.price;
});

console.log(sum)