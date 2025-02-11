

var employeeData = [
    { id: 1, fname: "Abc", lname: "Patel", state: "India", salary: 15000, con: "1234567890" },
    { id: 2, fname: "Ahjk", lname: "jkscd", state: "Canada", salary: 16000, con: "0987654321" },
    { id: 3, fname: "Xyz", lname: "Tandel", state: "Usa", salary: 10000, con: "1122334455" },
    { id: 4, fname: "Bobi", lname: "Ahir", state: "Gujarat", salary: 12000, con: "2233445566" }
];

// const lowSal = employeeData.filter(emp => emp.salary < 1000).map(emp => `${emp.fname} ${emp.lname}`).join(",");
// console.log(lowSal);


// var fn = employeeData.filter(emp => emp.fname.startsWith("A"));
// console.log(fn);

// const fn = employeeData.filter(emp=> emp.state === "Gujarat").map(emp => emp.fname); 
// console.log(fn);


// const inc = employeeData.flatMap(emp => ({ ...emp, salary: emp.salary + 500 }));
// console.log(inc);



// const lowsal=employeeData.filter(emp=> emp.salary>=15000)
// console.log(lowsal);


// ------------loop-------------------

// const fn = []; 
// for (let i = 0; i < employeeData.length; i++) {
//     if (employeeData[i].fname.startsWith("A")) {
//         fn.push(employeeData[i]);
//     }
// }
// console.log(fn);


// const inc = [];
// for (let i = 0; i < employeeData.length; i++) {
//     const upemp = { ...employeeData[i], salary: employeeData[i].salary + 500 };
//     inc.push(upemp); 
// }

// console.log(inc);






// const fn = [];
// const slicedData = employeeData.slice(0, 5); 

// for (let i = 0; i < slicedData.length; i++) {
//     if (slicedData[i].fname.startsWith("A")) {
//         fn.push(slicedData[i]);
//     }
// }
// console.log(fn);



// const fn = [];
// for (let i = 0; i < employeeData.length; i++) {
//     if (!employeeData[i].fname.startsWith("A")) {
//         employeeData.splice(i, 1); 
//         i--; 
        
//     }
// }
// console.log(employeeData); 



// const fn = [];
// for (let i = 0; i < employeeData.length; i++) {
//     if (employeeData[i].fname.startsWith("A")) {
//         const nameParts = employeeData[i].fname.split(""); 
//         console.log(nameParts); 
//         fn.push(employeeData[i]);
//     }
// }
// console.log(fn);


// ------method-------

// let arr = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];
// arr.splice(-2, 1, 'fig');
// console.log(arr); // Output: ['apple', 'banana', 'cherry', 'fig', 'elderberry']


// let arr = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];
// arr.splice(2, 2, 'fig', 'grapes');
// console.log(arr); // Output: ['apple', 'banana', 'fig', 'grapes', 'elderberry']


// let arr = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];
// let removedItems = arr.splice(2, 0, 'fig');
// console.log(removedItems); // Output: []




