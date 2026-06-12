// * Map , Filter , Reduce

/*
* map - will return you a new array
* map works on all items of array and returns all items 

* if you want length of array to be returned as it is 

[10,11,12,13,14]

Question : find which number are even

[10,12,14]
[true , false , true , false , true]
*/

let num = [10,20,30,40,50]

// ^ multiply by 2
newNum1 = num.map(num => num * 2)
console.log(newNum1)

newNum2 = num.map(num => num % 2 == 0)
console.log(newNum2)

// * Task 1 : check for divisiblity by 3 and 5
// * Task 2 : make a array of name and convert them into upperase and store it in new array and print it