// Join all elements of the array into a string
function joinArray() {
  var color = ["Red", "Green", "White", "Black"];
  console.log(color.join(""));
}


// Add 2 numbers taken as input from user
function addNumbers() {
  var a = parseInt(prompt("Enter first number: "));
  var b = parseInt(prompt("Enter second number: "));
  console.log(a + b);
}


// Merge 2 arrays into a single array
function mergeArrays() {
  var arr1 = [1, 2, 3, 44];
  var arr2 = [23, 5, 6, 7];
  console.log(arr1.concat(arr2));
}


// Remove a specific element from an array and add another value at that place
function replaceElement() {
  var color = ["Red", "Green", "White", "Black", "purple", "pink"];
  color.splice(4, 1, "May");
  console.log(color);
}


// Add/remove elements in an array using push/unshift
function modifyArray() {
  const arr1 = [1, 2, 3];
  arr1.push(4, 5);
  console.log(arr1);
  arr1.shift();
  console.log(arr1);
}


// Check if a user-input number is odd or even
function checkOddEven() {
  var num = prompt("Enter a number: ");
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}


// Filter people living in a specific city from an array of objects
function filterByCity() {
  var peoples = [
    { name: "Isha", age: 22, state: "Gujarat", mark: 87 },
    { name: "jhvfl", age: 25, state: "Maharashtra", mark: 90 },
    { name: "Isha", age: 23, state: "Delhi", mark: 45 },
    { name: "cvdssx", age: 14, state: "Gujarat", mark: 18 },
    { name: "djdsnd", age: 21, state: "Karnataka", mark: 92 },
  ];
  const peoplesOfGujarat = peoples.filter((people) => people.state === "Gujarat");
  console.log(peoplesOfGujarat);
}


// Reverse a given string
function reverseString() {
  var color = "pink";
  var reverseColor = color.split("").reverse().join("");
  console.log(reverseColor);
}


// Sort an array of objects by name
function sortByName() {
  var peoples = [
    { name: "Isha", age: 22, state: "Gujarat", mark: 87 },
    { name: "jhvfl", age: 25, state: "Maharashtra", mark: 90 },
    { name: "Isha", age: 23, state: "Delhi", mark: 45 },
    { name: "cvdssx", age: 14, state: "Gujarat", mark: 18 },
    { name: "djdsnd", age: 21, state: "Karnataka", mark: 92 },
  ];
  peoples.sort((a, b) => a.name.localeCompare(b.name));
  console.log(peoples);
}


// Sort an array of objects by age
function sortByAge() {
  var peoples = [
    { name: "Isha", age: 22, state: "Gujarat", mark: 87 },
    { name: "jhvfl", age: 25, state: "Maharashtra", mark: 90 },
    { name: "Isha", age: 23, state: "Delhi", mark: 45 },
    { name: "cvdssx", age: 14, state: "Gujarat", mark: 18 },
    { name: "djdsnd", age: 21, state: "Karnataka", mark: 92 },
  ];
  peoples.sort((a, b) => a.age - b.age);
  console.log(peoples);
}

// Replace a particular value in an object in an array of objects
function replaceValue() {
  var valueReplace = [
    { name: "Isha", age: 22, state: "Gujarat", mark: 87 },
    { name: "jhvfl", age: 25, state: "Maharashtra", mark: 90 },
    { name: "Isha", age: 23, state: "Delhi", mark: 45 },
    { name: "cvdssx", age: 14, state: "Gujarat", mark: 18 },
    { name: "djdsnd", age: 21, state: "Karnataka", mark: 92 },
  ];
  for (let i = 0; i < valueReplace.length; i++) {
    if (valueReplace[i].name === "cvdssx") {
      valueReplace[i].name = "one";
    }
  }
  console.log(valueReplace);
}

// Get all values in an array using iteration
function iterateArray() {
  var arr = [1, 2, 3, 4];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


// Check if a specific value is present in an array
function checkValueInArray() {
  const arr = [1, 2, 3];
  console.log(arr.includes(3));
}


// Find the first and last elements of an array
function findFirstLast() {
  var ele = [59.7, 3, 2, 3, 4, 5];
  let first = ele[0];
  let last = ele[ele.length - 1];
  console.log("First element: " + first);
  console.log("Last element: " + last);
}


// findFirstLast();
// joinArray();
// addNumbers();
// mergeArrays();
// replaceElement();
// modifyArray();
// checkOddEven();
// filterByCity();
// reverseString();
// sortByName();
// sortByAge();
// replaceValue();
// iterateArray();
// checkValueInArray();
