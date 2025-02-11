var namess = ["abc", "hdued", "123", "edre"];
var newarray =["DVf","fgt","jijl"];
// const addname = namess.splice(2, 1, "Feb");
// console.log(namess);


// const findIndNum = namess.findIndex((element) => element === "123");
// console.log(findIndNum);


const array3 = newarray.concat(namess);
console.log(array3);

const isBelowThreshold = array3.every( (array3) => array3 >10);
console.log(isBelowThreshold);
 



// var objar = [
//   { name: "Isha", age: 22, state: "Gujrat", mark: 87 },
//   { name: "jhvfl", age: 25, state: "Maharashtra", mark: 90 },
//   { name: "Isha", age: 23, state: "Delhi", mark: 45 },
//   { name: "cvdssx", age: 14, state: "Tamil-Nadu", mark: 18 },
//   { name: "djdsnd", age: 21, state: "Karnataka", mark: 92 },
// ];

// const updatedname = objar.filter((test) => test.age > 21);
// const namefd = updatedname.map((nme) => nme.name);
// console.log(namefd);

//  const accendingorder  = objar.sort((a, b) => a.age - b.age);
//  console.log(accendingorder);
 


//  const stringorder = objar.sort((a, b) => a.name.localeCompare(b.name));
//  console.log(stringorder);


// const isStateGujrat = objar.some((obj) => obj.state === "Gujrat");
// console.log(isStateGujrat);


// const removeobj = objar.filter(person => person.state !== "Delhi");
// console.log(removeobj);

// console.log(objar);
 
// const found = objar.findLast((name) => name.name ==="Isha");
// console.log(found);

// const crateArray=objar.map((nme) => nme.name);
// console.log(crateArray);

