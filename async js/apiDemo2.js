function getdata() {
  const ans = fetch("https://jsonplaceholder.typicode.com/todos/1");
  ans
    .then((result) => {
      return result.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

getdata();

async function getdata2() {
  const id = 101;
  const ans = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  const res = await ans.json();
  console.log(res);
}
getdata2();

async function setdata() {
    try
    {

        const ans = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                id: 12341234,
                userId: 888,
                title: "Kem cho",
                completed: false,
            }),
        });
        
        const res = await ans.json();
        console.log(res);
    }catch(err)
    {
        console.log(err)
    }
}

setdata();
