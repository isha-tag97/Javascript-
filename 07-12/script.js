// console.log("hey");
// console.log("hello");

// //asc

// console.log("hey");
// console.log("hello");

// setTimeout(()=>{
// console.log('heyyyy');
// },4000);

// console.log('what');

// function getData(dataId) {
//     console.log("data",dataId);

// }

// let test = new Promise((resolve,reject)=>{
//     console.log("jijokl");
//     resolve("success");

// });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// let url = "https://jsonplaceholder.typicode.com/todos/";
// const getfacts = async () => {
//   console.log("getting data");
//   let response = await fetch(url).then(data => console.log(data));
//   console.log("response", response);
// };

// getfacts()




// const myObject = {
//     title: "hujhj", 
//     body: "nkjnknkmnksenfkrnflsklwqkoej awfc", 
//     userID: 1 
    
// };

// const getFacts = async () => {
//     const url = "https://jsonplaceholder.typicode.com";
  

//       const fetchResponse = await fetch(`${url}/posts`);
//       const posts = await fetchResponse.json();
//       document.getElementById("data-table").innerHTML = posts
//         .map(
//           ({ id, title, completed }) => `
//             <tr id="post-${id}">
//                 <td>${id}</td>
//                 <td>${title}</td>
//                 <td>${completed ? "Yes" : "No"}</td>
//                 <td><button class="delete-btn" data-id="${id}">Delete</button></td>
//             </tr>
//           `
//         )
//         .join("");
//       document.querySelectorAll(".delete-btn").forEach((button) =>
//         button.addEventListener("click", async (e) => {
            
//             const postId = e.target.getAttribute("data-id");
//             console.log(postId);
  
//           const deleteResponse = await fetch(`${url}/posts/${postId}`, {
//             method: "DELETE",
//           });
  
//           if (deleteResponse.ok) {      
//             document.getElementById(`post-${postId}`).remove();
          
//           }
//         })
//       );
//   };
  
//   getFacts();
  

// const getFacts = async () => {
//   let url = "https://jsonplaceholder.typicode.com";

//   const response = await fetch(`${url}/posts`, {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "false",
//      userId: 5,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };
// getFacts();



   
// function deleteRow(id) {
//     var table = document.getElementById("customTable");
//     for (var i = 1; i < table.rows.length; i++) {
//         var row = table.rows[i];
//         var cell = row.cells[0];  
        
//         if (cell.innerHTML == id) {     
//             var rowData = {};
//             for (var j = 0; j < row.cells.length; j++) {
//                 var header = table.rows[0].cells[j].innerHTML;  
//                 rowData[header] = row.cells[j].innerHTML;
//             }
//             console.log(rowData);  
//             table.deleteRow(i);
//             break;
//         }
//     }
// }



//Rest

function Rest(a,b,...other){
    console.log(other);
    return a+b;
}
const res=Rest(28,11,2,4,678,99,9)
console.log(res);


//speard
var word=["dsdcefc","fscewf","dfw","dw"];

function getName(w1,w2,w3,w4) {
    console.log(w1,w2);
    
}
getName(...word)

var testData = {
    name: 'test',
    age: 23,
    country: 'india'
}

console.log(testData);

// testData = {...testData, id:'1'}
// {name:'test', age: 23 , country: 'india', id:'1'}
// var {age, ...testData} = testData 
delete testData.age;
console.log(testData);




