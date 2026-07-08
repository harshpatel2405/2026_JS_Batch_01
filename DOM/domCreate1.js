let div = document.getElementById("myDiv");
let ans = document.createElement("h1");

ans.innerHTML = "<h1>This is heading with create element </h1>";

div.appendChild(ans);

let table = document.getElementById("mytable");

// let tr = document.createElement("tr");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");

// td1.innerHTML = "<b>Harsh</b>";
// td2.innerHTML = "<b>Patel</b>";

// tr.appendChild(td1);
// tr.appendChild(td2);
// table.appendChild(tr);

const data = [
  {
    name: "Harsh",
    age: 22,
    marks: 98,
  },
  {
    name: "vasu",
    age: 23,
    marks: 97,
  },
  {
    name: "dev",
    age: 24,
    marks: 96,
  },
];

data.forEach((d) => {
  let tr = document.createElement("tr");

  let name = document.createElement("td");
  name.innerText = d.name;
  let age = document.createElement("td");
  age.innerText = d.age;
  let marks = document.createElement("td");
  marks.innerText = d.marks;

  tr.appendChild(name)
  tr.appendChild(age)
  tr.appendChild(marks)

  table.appendChild(tr)
});


let myD = document.getElementById("myD")

let button = document.createElement("button")

button.innerText = "Log In"
button.style.color = "yellow"
button.style.backgroundColor = "blue"


let anchor = document.createElement("a")
// anchor.href="www.google.com"
anchor.innerText = "Google"
anchor.setAttribute("href","www.google.com")

myD.appendChild(anchor)

myD.appendChild(button)