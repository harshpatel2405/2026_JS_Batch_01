// * filter -- returns only that element of the array which satisfies the condition

const employees = [
  { id: 1, name: "John", department: "IT", salary: 60000 },
  { id: 2, name: "Sarah", department: "HR", salary: 45000 },
  { id: 3, name: "Mike", department: "IT", salary: 80000 },
  { id: 4, name: "Emma", department: "Finance", salary: 70000 },
];

// ^ get all employees who work in IT
let ITEmployees = employees.filter((employee) => {
    return (employee.department === "IT")
})
console.log(ITEmployees)

// ^ get those employees who earn more than 50000
let MoreEarningEmployees = employees.filter((employee) =>{
    return (employee.salary > 50000)
})
console.log(MoreEarningEmployees)

// ^ get those employees who are working in HR or finance 
let HRFinanceEmployees  = employees.filter((employee) => employee.department === "HR" || employee.department === "Finance")
console.log(HRFinanceEmployees)