function myEventClick() {
  alert("Click Event Called");
}

let count = 0;
let co = document.getElementsByTagName("h1")[0];

function counter() {
  co.innerText = "Count : " + ++count;
}

colors = ["red", "black", "yellow", "pink", "grey"];
let myDiv = document.getElementsByTagName("body");
let k = 0;

function changeColor() {
  if (k == colors.length) k = 0;
  myDiv.style.backgroundColor = colors[k++];
}
