async function callData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");


  const res = await response.json();
  console.log( res);
}

callData();

