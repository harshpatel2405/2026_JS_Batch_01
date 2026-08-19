console.log("Start");


function getBox() {
  setTimeout(() => {
    let body = document.getElementById("body");
    let box = document.createElement("div");
    box.style.backgroundColor = "red";
    box.style.height = "100px";
    box.style.width = "100px";
    box.style.border = "2px solid black";
    console.log("Hello World");

    body.appendChild(box);
  }, 3000);

  setTimeout(() => {
    let body = document.getElementById("body");
    let box = document.createElement("div");
    box.style.backgroundColor = "green";
    box.style.height = "100px";
    box.style.width = "100px";
    box.style.border = "2px solid black";
    console.log("Calling 2nd time");

    body.appendChild(box);
  }, 6000);
}

console.log("End");
