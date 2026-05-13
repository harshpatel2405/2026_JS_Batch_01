//Ternary -- mini if..else 
let a = 45;
let b = 456;


// condition ? true : false  - print , return
(a > b) ? console.log(a + "  is greater than " + b) : console.log(a + " is less than " + b);

let min = (a < b) ? a : b;
console.log(min + " is minimum")

let p = 4589, q = 8798498, r = 985;

let max = (p > q) ? ((p > r) ? p : r) : ((q > r) ? q : r);
console.log(max + " is maximum")

// if(a > b)
//     console.log(a + "  is greater than " + b)
// else
//     console.log(a + " is less than " + b)
