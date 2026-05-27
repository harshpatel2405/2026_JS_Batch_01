const user = {
    name: "Ram Kothari Sharma",
    age: 75,
    countriesTravelled: 12,
    accountBalance: "100000$",
}

console.log("User : ", user)
console.log("Name : ", user.name)
console.log("Age : ", user.age)
console.log("Countries Travelled : ", user.countriesTravelled)
console.log("Account Balance : ", user.accountBalance)

// * nested json  -- json inside json
const student = {
    name: "Alexa",
    age: 12,
    rollNo: 101,
    marks: {
        science: 78,
        maths: 45,
        english: 64,
    },
    email: "alexa@amazon.com",
    address: {
        area: "Y Street",
        City: "Los Angeles",
        state: "State of Washington",
        pincode: 120502,
    }
}
console.log("Student JSON : ", student)
console.log("Roll No : " + student.rollNo)
console.log("Marks : ", student.marks)
console.log("Science Marks : ", student.marks.science)
console.log("PinCode : ", student.address.pincode)

/* HW
* create json for book min 10 fileds required
* create json for product min 8 fileds
*/