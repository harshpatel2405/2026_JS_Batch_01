let myDiv = document.getElementById("myDiv");

let heading1 = document.createElement("h1");
heading1.innerText = "NETFLIX";
heading1.style.color = "RED";
heading1.style.textAlign = "center";
heading1.style.backgroundColor = "Black";

myDiv.appendChild(heading1);

const data = [
  {
    id: 1,
    title: "The Cyber Horizon",
    genre: ["Sci-Fi", "Action"],
    year: 2029,
    director: "Elena Rostova",
    rating: 8.5,
    cast: ["Marcus Vance", "Zara Lin"],
    summary:
      "In a hyper-connected future, a rogue AI begins rewriting human memories.",
  },
  {
    id: 2,
    title: "Chef's Final Recipe",
    genre: ["Drama", "Comedy"],
    year: 2025,
    director: "Marco Valenti",
    rating: 7.9,
    cast: ["Julia Roberts", "David Choi"],
    summary:
      "A once-renowned chef seeks redemption by opening a food truck in his hometown.",
  },
  {
    id: 3,
    title: "Echoes of the Canyon",
    genre: ["Mystery", "Thriller"],
    year: 2027,
    director: "Ava Chen",
    rating: 8.1,
    cast: ["Liam Neeson", "Chloe Grace"],
    summary:
      "Hikers uncover a hidden bunker in the Grand Canyon containing decades-old secrets.",
  },
  {
    id: 4,
    title: "Neon Chase",
    genre: ["Action", "Crime"],
    year: 2028,
    director: "Jax Miller",
    rating: 7.3,
    cast: ["Dwayne Johnson", "Zoe Kravitz"],
    summary:
      "A high-speed pursuit through the neon-lit streets of Neo-Tokyo goes terribly wrong.",
  },
];

let table = document.getElementById("dataTable");

for (let i = 0; i < data.length; i++) {
  let id = document.createElement("td");
  id.innerText = data[i].id;
  let title = document.createElement("td");
  title.innerText = data[i].title;
  let year = document.createElement("td");
  year.innerText = data[i].year;
  let director = document.createElement("td");
  director.innerText = data[i].director;

  let cast = document.createElement("tr");
  cast.innerText = data[i].cast[0] + ", " + data[i].cast[1];

  let row = document.createElement("tr");
  row.appendChild(id);
  row.appendChild(title);
  row.appendChild(year);
  row.appendChild(director);
  row.appendChild(cast);

  table.appendChild(row);
}
