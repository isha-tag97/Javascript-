// const word = ["alfa", "arrow", "dot", "function", "tag"];

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// var i = 3;
// while (i < word.length) {
//     console.log(word[i]);
//     i++;
// }

// let i = 2;
// do {
//     console.log(word[i]);
//     i++;
// } while (i<=word.length);

// for (let i = 0; i < word.length; i++) {
//     if (word[i] === "dot") {
//         console.log(" Breaking the loop");
//         break;
//     }
//     console.log(word[i]);
// }

// for (let i = 0; i < word.length; i++) {
//     if (word[i] === "dot") {
//         console.log(" Skipping this iteration");
//         continue;
//     }
//     console.log(word[i]);
// }

// for (let index in word) {
//     console.log(`Index ${index}: ${word[index]}`);
// }

// for (let element of word) {
//     console.log(element);
// }

// word.forEach((element, index) => {
//     console.log(`Index ${index}: ${element}`);
// });

// outerLoop:
// for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < word.length; j++) {
//         if (word[i] === "dot") {
//             console.log("Breaking outer loop");
//             break outerLoop;
//         }
//         console.log(`Inner loop: ${word[i]}, ${word[j]}`);
//     }
// }

// const square = function (number) {
//     return number * number;
//   };

//   console.log(square(4));

// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }

//   const myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };

//   console.log(myCar.make); // "Honda"
//   myFunc(myCar);
//   console.log(myCar.make); // "Toyota"

// myNameValue="isha";
// function MyName(){
//     console.log(myNameValue);

// }
// MyName();

// let myNameValue;

// ----------------------------condition------------------------

// var a = 0;
//   if(a>0){
//   console.log(true);
//   }

// if(a<0){
//     console.log(true);
//
//     }else{
//         console.log(false);

//     }

// if (a == 0) {
//   console.log(true);
// } else if (a === 0) {
//   console.log(false);
// } else {
//   console.log("ntg");
// }

// let day = "tuesday";

// switch (day) {
//   case "monday":
//     console.log(1);
//     break;
//   case "tuesday":
//     console.log(28);
//     break;
//   case 2:
//     console.log(2);
//     break;

//   case 4:
//     console.log(11);
//     break;
//   default:
//     console.log("no idea");
// }

// function Mynum(a , b ) {
//   return a !== undefined ? a * b : "Error"

// }
// console.log(Mynum());


// var hey= () =>{
//   console.log("hello"); 
// }
// hey();



// const fruits = new Array("fsdewa", "frfwds");
// console.log(fruits.length); 


// const btn=document.getElementById("mybtn");
// const text=document.getElementById('text')

// btn.addEventListener('click',()=>{text.textContent='clicked';console.log('btn clicked');
// });


// async

// document.getElementById('mybtn').addEventListener('click',function(){
//   setTimeout(function() {
//     document.getElementById('text').innerHTML='text display but after 2  sec ';
    
//   }, 2000);
// });



//sync

// document.getElementById('mybtn').addEventListener('click',function(){
//   document.getElementById('text').innerHTML="text display when click "
// });


// const log = document.querySelector(".event-log");

// document.querySelector("#xhr").addEventListener("click", () => {
//   log.textContent = "";

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("loadend", () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//   });

//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
//   );
//   xhr.send();
//   log.textContent = `${log.textContent}Started XHR request\n`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   log.textContent = "";
//   document.location.reload();
// });



// // Simulate an asynchronous operation using a promise
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Sample Data");
//     }, 2000);
//   });
// }

// // Async function to fetch data
// async function getData() {
//   try {
//     const result = await fetchData(); // Wait for the promise to resolve
//     console.log("Data received:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getData();