const check = document.getElementById("check");

const student = {
  name: "Harsh",
  age: 22,
  marks: 89,
};

// check.innerText = "This is tag of strong made with DOM Manipulation";

check.innerHTML ="<h1>This is h1 tag</h1>"

// * innerTExt -- treat as normal text (even tags are treated as text)
// * innerHTML -- treat html tag as tags instead of TEXT