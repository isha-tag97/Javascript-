var employeeData = [
  { id: 1, fname: "Abc", lname: "Patel", state: "India", salary: 15000, con: "1234567890" },
  { id: 2, fname: "Ahjk", lname: "jkscd", state: "Canada", salary: 16000, con: "0987654321" },
  { id: 3, fname: "Xyz", lname: "Tandel", state: "Usa", salary: 10000, con: "1122334455" },
  { id: 4, fname: "yobi", lname: "Ahir", state: "Gujarat", salary: 12000, con: "2233445566" }
];


// Add new employee

// var newEmployee = { id: 5, fname: "John", lname: "Doe", state: "Australia", salary: 18000, con: "3344556677" };
// employeeData.push(newEmployee);
// console.log(employeeData);


// var newEmployee = { id: 5, fname: "John", lname: "Doe", state: "Australia", salary: 18000, con: "3344556677" };
// employeeData.splice(2, 1, newEmployee);
// console.log(employeeData); 


// employeeData = employeeData.filter(emp => !emp.fname.startsWith("Xyz"));
// console.log(employeeData);


let index = employeeData.findIndex(employee => employee.fname.startsWith("Xyz"));
if (index !== -1) {
    employeeData.splice(index, 1);
}

console.log(employeeData);




// Remove employee who's state is Gujarat


// employeeData = employeeData.filter(emp => emp.state !== "Gujarat");
// console.log(employeeData);


// Edit state of any employee

// employeeData = employeeData.map(emp=>emp.id === 3 ? { ...emp, state: "UK" } : emp);
// console.log(employeeData);



// Get object whose fname's length is greater then 3

// var emp = employeeData.filter(employee => employee.fname.length > 3);
// console.log(emp);