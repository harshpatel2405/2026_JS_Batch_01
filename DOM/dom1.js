// * get by tag name
// let bold = document.getElementsByTagName("b");
// bold[0].innerText = "This is getbytagname";

// * get by class name
let bold = document.getElementsByClassName("bo");

// & bold[0].innerText = "This is with class name "; // & for only first occurence of class
// ^ for all possiblities of class occurence
for (let i = 0; i < bold.length; i++) {
  bold[i].innerText = "This is with class name ";
}

// * getting element with help of ID
// document.getElementById("bo").innerText =
//   "This is inside bold tag after DOM manuipulation";

// let bold = document.getElementById("bo");

// bold.innerText = "This is inside bold tag after DOM manuipulation"



// * accessed HTML Element and mofdified it with the help of DOM -- id , className , tagName

// * event
