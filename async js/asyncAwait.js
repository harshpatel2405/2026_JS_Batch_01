function getOrder() {
  let promise = new Promise((res, rej) => {
    let order = false;
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

async function main()
{
    try
    {
        const res1 = await getOrder();
        console.log(res1)
        const res2 = await ProcessPayment();
        console.log(res2)
        const res3 = await setBill();
        console.log(res3)
        
        console.log("Order Confirmed Successfully")
    }
    catch(error)
    {
        console.log(error)
        console.log("error in program ")
    }
}
main()