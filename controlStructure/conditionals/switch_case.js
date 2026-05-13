let season = parseInt(prompt("1. Summer\n2. Monsoon\n3. Winter\n4. Spring\nEnter your choice"))

switch (season) {
    case 1: console.log("Season : Summer\n")
        break;
    case 2: console.log("Season : Monsoon\n")
        break;
    case 3: console.log("Season : Winter\n")
        break;
    case 4: console.log("Season : Spring\n")
        break;
    default: console.log("select Season between 1 and 4 only")
}

/*
ATM 
1. deopsit 
2. withdraw 
3. check balance 
4. exit
*/


let amount;
let balance = 25000
let operation = 0;

do {

    operation = parseInt(prompt("1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit\nSelect your operation"))

    switch (operation) {
        case 1: amount = parseInt(prompt("Enter amount to be depositted"))
            balance += amount;
            // console.log(amount + " added Successfully...Current Balance : " + balance)
            console.log(`${amount} depositted successfully.... Current Balance : ${balance}`)
            
            break;
        case 2: amount = parseInt(prompt("Enter amount to be withdrawn"))

            if (amount <= balance) {
                balance -= amount;
                // console.log(amount + " withdrawn Successfully...Current Balance : " + balance)
                console.log(`${amount} withdrawn successfully.... Current Balance : ${balance}`)
            } else {
                console.log("Enter amount less than balance")
            }
            break;
        case 3: console.log("Current Balance : " + balance)
            break;
        case 4: console.log("Exiting ATM")
            break;
        default: console.log("Select Correct ATM Operation")
    }
} while (operation != 4) 