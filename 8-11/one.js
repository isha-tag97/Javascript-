// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

const title1 = prompt("Enter a string1:");
function Title(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(Title(title1));

// Write a JavaScript program to find the maximum occuring number in an array.

let numbers = [3, 7, 2, 8, 5, 8, 2, 2, 8,8,8];

function findMaxOccurringNumbers(arr) {
    const map = new Map();
    arr.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });

    const maxCount = Math.max(...Array.from(map.values()));

    return Array.from(map.entries()).filter(([num, count]) => count === maxCount).map(([num]) => num);
}

console.log(findMaxOccurringNumbers(numbers));  



// Write a JavaScript program to get the current date.

let date = new Date().toLocaleDateString("DE");
console.log(date);

// Write a JavaScript program to get sum of all items in array

var sum = [1, 2, 3];
function arrsum(sum) {
  return sum.reduce((total, item) => total + item, 0);
}

console.log(arrsum(sum));

// Write a JavaScript program to find the given number is odd or even

// var num = prompt("Enter a number: ");
// num = Number(num);

// if (num % 2 === 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }

// Write a JavaScript program to swap 2 values

a = 28;
b = 11;
console.log("swap: a =", b, "b =", a);

// Write a JavaScript program to reverse string

var val = prompt("Enter a string:2REV");
function rev(str) {
  return str.split("").reverse().join("");
}
console.log(rev(val));

// Write a JavaScript program to remove repeated number from array

const num1 = [1, 2, 3, 1, 3, 2, 4];
function Unique(arr) {
  let uniqueArr = [];
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  return uniqueArr;
}

let Number = Unique(num1);
console.log(Number);

// Write a JavaScript program to check Typeof input provided

let number = prompt("Enter a number3:");
console.log(typeof number);

// Write a JavaScript function to split a string and convert it into an array of words

const text = prompt("Enter a sentenceSP:");
function Words(str) {
  return str.split(" ");
}
console.log(Words(text));

// Write a JavaScript program to convert a string to lower case
var Input = prompt("Enter a string:");

if (Input !== null) {
  function title(str) {
    return str.toLowerCase();
  }
  console.log(title(Input));
} else {
  console.log("No input provided.");
}

// Write a JavaScript program to find no.of items inside a array

var arr = [1, 23, 3, 5, 5, 6, "1"];

function item(array) {
  return array.length;
}

console.log(item(arr));

// Write a JavaScript program to convert string to number (if possible to change)

var ui = prompt("Enter a number as a string:");
console.log(parseInt(ui));

// Write a JavaScript program to remove first, last element from array

var arr1 = [1, 2, 3, 4, 5];
// arr1.shift();
// arr1.pop();
arr1.splice(2, 2, 1);

console.log(arr1);

// Write a JavaScript program to add first, last element from array

let arr2 = [2, 3, 4];

// arr2.unshift(1);
// arr2.push(9);

arr2.splice(2, 0, 1);
console.log(arr2);
