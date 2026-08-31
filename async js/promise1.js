function getData() {
  let promise = new Promise((res, rej) => {
    let success = false;

    if (success == true) {
      rej("Data has not been submitted");
    } else {
      setTimeout(() => {
        res("Function Called with promise");
      }, 2000);
    }
  });

  promise
    .then((res) => {
      console.log(res);
    })
    .catch((rej) => {
      console.log(rej);
    });
}
getData();
