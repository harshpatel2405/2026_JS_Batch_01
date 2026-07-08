// // * querySelector -- updated only first occurence
// let para = document.querySelector("p");

// para.innerText = "This is para tag from dom manipulation";

// let boldData = document.querySelector(".text");
// boldData.innerText = "This is bold tag from dom manipulation";

// let spanData = document.querySelector("#data");
// spanData.innerHTML = "<h1>This is a div updated due to dom manipulation</h1>";

// // *querySelectorAll - returns node list
// let paraAll = document.querySelectorAll("p");
// console.log(paraAll);

// for (let i = 0; i < paraAll.length; i++) {
//   paraAll[i].innerText =
//     "This is para tag from dom manipulation using query selector all ";
// }

// paraAll.forEach((para)=>
// para.innerText = "For Each Loop on para tag ")


// * getElementbytagname 
let tagPara = document.getElementsByTagName("p")
console.log(tagPara)

console.log(tagPara[0].innerHTML)
console.log(tagPara[0].innerText)
// console.log(tagPara[0].textContent)

