// * reduce - reduce to single item
const orders = [
  { id: 1, amount: 1200 },
  { id: 2, amount: 3400 },
  { id: 3, amount: 800 },
  { id: 4, amount: 1500 },
];

// ^ calculate total sales
let totalSales = orders.reduce((acc, order) => {
  return acc + order.amount;
}, 0);

console.log(totalSales);

// ^ find highest order amount
let highestOrderAmount = orders.reduce((acc, order) => {
  if (acc < order.amount) {
    acc = order.amount;
  }
  return acc;
}, 0);
console.log(highestOrderAmount);
