function getOrder() {
  let promise = new Promise((res, rej) => {
    let order = true;
    if (order == true) {
      setTimeout(() => {
        res("Order Placed Successfully");
      }, 1000);
    } else {
      rej("Order is not placed");
    }
  });

  return promise;
}

function ProcessPayment() {
  let promise = new Promise((res, rej) => {
    let payment = true;
    if (payment == true) {
      setTimeout(() => {
        res("Payment got Successfully");
      }, 1000);
    } else {
      rej("Error in payment");
    }
  });

  return promise;
}

function setBill() {
  let promise = new Promise((res, rej) => {
    let bill = true;
    if (bill == true) {
      setTimeout(() => {
        res("Bill Generated Successfully");
      }, 1000);
    } else {
      rej("Error in Bil generation");
    }
  });

  return promise;
}

getOrder()
.then((res)=>{
    console.log(res)
    return ProcessPayment()
})
.then((res)=>{
    console.log(res)
    return setBill()
})
.then((res)=>{
    console.log(res)
    console.log("Order is confirmed")
})
.catch((error)=>{
    console.log(error)
})