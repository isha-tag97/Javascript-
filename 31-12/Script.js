// 1.Write a JavaScript program to convert a string into upper-case

function text() {
  let text = "hello ";
  let result = text.toUpperCase();
  console.log(result);
}

// 2.Write a JavaScript program to convert a string into title-case (capitalize the first letter of each word).

function Title(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// 3.Write a JavaScript program to convert a string into lower-case

function text1() {
  let text = "HeLLo ";
  let result = text.toLowerCase();
  console.log(result);
}

// 4.Write a JavaScript program to reverse string (consider this string:- "Good Morning")

function reverse(str) {
  return str.split("").reverse().join("");
}

// 5.Write a JavaScript program to convert string to number (consider this string:- "123")
const strToNumber = Number("123");

// text();
// console.log(Title('ISha'));
// text1();
// console.log(reverse("Good Morning"));
// console.log(strToNumber);

// 6. Convert number to string
function number(num) {
    return num.toString();
}
console.log(number(9951));

// 7. Get the current date
function getCurrentDate() {
    return new Date().toLocaleDateString();
}
console.log(getCurrentDate()); 

// 8. Check typeof variable
function checkType(variable) {
    if (Array.isArray(variable)) return "array";
    return typeof variable;
}
console.log(checkType("Hello")); 
console.log(checkType(123)); 
console.log(checkType([])); 
console.log(checkType({})); 

// 9. Check if a number is odd or even
function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isOddOrEven(10)); 
console.log(isOddOrEven(15)); 

// 10. Swap two values

function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swap(5, 10)); 

// 11.Write a JavaScript program to find no. of items inside a array (consider this array:-[1,2,3,5,6,7,8,9,10])

const array = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log("Item:", array.length);

// 12.Write a JavaScript program to get SUM of all items in array (consider this array:-[1,2,3,5,6,7])

const arr1 = [1, 2, 3, 5, 6, 7];
const sum = arr1.reduce((acc, val) => acc + val, 0);
console.log(sum); 

// 13.Write a JavaScript program to remove repeated number from array (consider this array:-[1,2,1,5,6,7])

const arr2 = [1, 2, 1, 5, 6, 7];
const uniqueArr = [...new Set(arr2)];
console.log(uniqueArr); 

// 14.Write a JavaScript function to split a string with "," and convert it into an array of words. (consider this string:-"Hello, Good Morning, How are you?,")


const str = "Hello, Good Morning, How are you?,";
const words = str.split(',').map(word => word.trim()).filter(word => word !== "");
console.log(words); 

// 15.Write a JavaScript program to add value at first and last in array.
const arr3 = [2, 3, 4];
arr3.unshift(1); 
arr3.push(5);    
console.log(arr3); 


// 16.Write a JavaScript program to remove first and last element from array

let arr = [1, 2, 3, 4, 5];
arr.shift(); 
arr.pop();   
console.log(arr); 

// 17.Write a JavaScript program to add and remove element in array using splice() method.

let arr11 = [1, 2, 3, 4];
arr.splice(2, 1, 10, 20); 
console.log(arr11); 

// 18.Write a JavaScript program to demonstrate slice() method of array. (consider this array:-[1,2,3,4,5,6,7]) =>  Output should be=>[3,4,6]

const ar = [1, 2, 3, 4, 5, 6, 7];
const result = [ar[2], ar[3], ar[5]]; 
console.log(result); 

// 19.Write a JavaScript program to add object in array. (consider this properties: id, name, email)
const arry = [];
arr.push({ id: 1, name: "Isha", email: "Isha@example.com" });
console.log(arry); 

// 20.Write a JavaScript program to print SUM of 'salary' (take 5-10 records with this props: id, name, age, salary, mobile)
const employees = [
    { id: 1, name: "Isha", age: 22, salary: 15000, mobile: "6356962811" },
    { id: 2, name: "Bvsc", age: 30, salary: 6000, mobile: "2345678901" },
    { id: 3, name: "Csd", age: 28, salary: 5500, mobile: "3456789012" },
    { id: 4, name: "Dfc", age: 35, salary: 7000, mobile: "4567890123" },
    { id: 5, name: "Evfbf", age: 32, salary: 6500, mobile: "5678901234" },
  ];
  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
  console.log(totalSalary); 
  

//   21.Write a JavaScript program to filter all data which have age greeter then 25 (take 5-10 records with this props: id, name, age, salary, mobile
const records = [
    { id: 1, name: "Isha", age: 22, salary: 15000, mobile: "6356962811" },
    { id: 2, name: "Bvsc", age: 30, salary: 6000, mobile: "2345678901" },
    { id: 3, name: "Csd", age: 28, salary: 5500, mobile: "3456789012" },
    { id: 4, name: "Dfc", age: 35, salary: 7000, mobile: "4567890123" },
    { id: 5, name: "Evfbf", age: 32, salary: 6500, mobile: "5678901234" },
  ];
const filtered = records.filter(person => person.age > 25);
console.log(filtered); 
//     22.Write a JavaScript program to demonstrate forEach() loop and print name in console (take 5-10 records with this props: id, name, age, salary, mobile)

records.forEach(person => console.log(person.name)); 


//     23.Write a JavaScript program to print obj in console.log() with given properties (id, name, age, salary, mobile)
//     24.Write a JavaScript program to add new property in existing object
//     25.Write a JavaScript program to delete property from object
delete obj.age;
console.log(obj); 

// 26.Write a JavaScript program to check whether the property is exist in object or not
// 27.Write a JavaScript program to reload the window on button click
<button onclick="location.reload()">Reload</button>

// 28.Write a JavaScript program to toggle button color on click (RED/GREEN wise-versa)
// 29.Write a JavaScript program to open-up confirmation-pop-up on button click and if confirmed show alert with "Success" text (RED/GREEN wise-versa)
// 30.Write a JavaScript program to show alert() when we hover on button


{/* <button1 onmouseover="showAlert()">Hover Me</button1> */}

  function showAlert() {
    alert("Button hovered!");
  }



// 31.Write a JavaScript program to demonstrate ternary condition (take any boolean flag)
// 32.Write a JavaScript program to generate random number (from 1-to-100)

const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);


    