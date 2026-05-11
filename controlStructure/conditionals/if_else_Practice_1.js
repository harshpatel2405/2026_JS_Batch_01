/*
*   Input weight(in kg) and height(in meters) → calculate BMI and classify:
*   	BMI = weight / (height * height)
*   		BMI < 18.5 → Underweight
*   		18.5–24.9 → Normal
*   		25–29.9 → Overweight
*   		30+ → Obese
*/

// let weight = prompt("Enter Weight : ")
// let height = prompt("Enter Height : ")

// let BMI = weight / (height * height)

// if (BMI < 18.5)
//     console.log("UnderWeight")
// else if (BMI >= 18.5 && BMI < 25)
//     console.log("Normal")
// else if (BMI >= 25 && BMI < 30)
//     console.log("OverWeight")
// else if (BMI >= 30)
//     console.log("Obese")


/*
 Employee Salary Slip Simulation	Input:
    Basic Salary
    If salary > 20000
        HRA = 25%, DA = 90%
    Else
        HRA = 20%, DA = 80%
    Calculate and print Gross Salary
*/

// let basicSalary = 22000;
// let hra, da;

// if (basicSalary > 20000) {
//     hra = 0.25 * basicSalary;
//     da = 0.9 * basicSalary;
// }
// else {
//     hra = 0.2 * basicSalary;
//     da = 0.8 * basicSalary;
// }

// let grossSalary = basicSalary + hra + da;
// console.log("Basic Salary : " + basicSalary)
// console.log("HRA : " + hra)
// console.log("DA : " + da)
// console.log("Gross Salary : " + grossSalary)

/*
Real-time Billing with Discount & Tax
    Inputs:
        Total Bill Amount
        Customer type (1-Regular, 2-Member, 3-Premium)
    Logic:
        If amount ≥ 5000
            Regular → 5% discount
            Member → 10% discount
            Premium → 15% discount
        Else
            Regular → No discount
            Member → 5%
            Premium → 10%
        	
        After discount, apply 18% GST → Final Bill
*/

let bill = prompt("Enter Bill Amount")
let ct = prompt("1. Regular\n2. Member\n3. Premium\nEnter your choice")
let discount = 0;

if (bill >= 5000) {
    if (ct == 1) {
        discount = 5;
    }
    else if (ct == 2) {
        discount = 10;
    }
    else if (ct == 3) {
        discount = 15;
    }
}
else {
    if (ct == 1) {
        discount = 0;
    }
    else if (ct == 2) {
        discount = 5;
    }
    else if (ct == 3) {
        discount = 10;
    }
}

let discountAmount = discount * bill / 100;

console.log("Bill Before Discount : " + bill)
console.log("Discount Percentage : " + discount)
console.log("Discount Amount : " + discountAmount)

bill = bill - discountAmount;
console.log("Bill After Discount : " + bill)