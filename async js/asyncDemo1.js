console.log("1");
console.log("2");
console.log("3");

function first() {
  console.log("First");
}

function second() {
  console.log("second");
}

first();
second();

console.log("Before Loop");

start = Date.now();
while (Date.now() - start != 300) {
  console.log("Difference Reached");
}
console.log("After Loop");
