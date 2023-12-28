// //Fetch API => The fetch api is a modern interface that allows you to make HTTP Requests to servers from web browsers
// //It uses Promise to deliver more flexible features to make requests to servers from web
// //fetch data from api (using get method)
// const url = "https://api.publicapis.org/entries";
// //First .then is used to convert response into javascript object ,
// //second .then is use to utilize the data we get from api
// fetch(url).then((res) => res.json()).then((data) =>{
//     const requdata = data.entries;
//     console.log(requdata[0]);
//     console.log(requdata[1]);
// });
// //Posting data into a api (using post method)
// fetch('https://catfact.ninja/fact',{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body:JSON.stringify({
//         id:101,
//         title: "changed",
//         price: 10,
//     }),
// })
// .then((res) => res.json()).then((data) => console.log(data)).then((result) => {
//     console.log(url);
// }).catch((err)=> {
//     return ("error");
// })
// //handling error
// //always put try catch on response you get fron api
// //The async keyword is used to define an asynchronous function. An asynchronous function returns a promise implicitly,
// //allowing you to use await within it to wait for the resolution of another promise.
// //The await keyword is used inside an async function to pause the execution of the
// //function until the promise is resolved. It can only be used within an async function.
// async function fetchFunction(){
//     try {
//         const response = await fetch('https://catfact.ninja/fact');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('ERROR');
//     }
// }
// fetchFunction();

// //Practical of fetch/async/await😀
// const heading1 = document.querySelector(".heading");
// const content1 = document.querySelector(".content");
// const errors1 = document.querySelector(".error");
// const api = fetch(url);
// api.then((response) => response.json())
// .then((data) => {
//     const required = data.entries;
//     const name = required[2].API;
//     const link = required[2].Link;
//     heading1.innerHTML = `Name : ${name}`;
//     content1.innerHTML = `Link : ${link}`;

// })
// .catch((error)=>{
//     console.log('error is :' ,error);
//     errors1.innerHTML = `Failed to Load api`;
// });
// const heading = document.querySelector(".heading");
// const content = document.querySelector(".content");
// const errors = document.querySelector(".error");

// async function responseAPI() {
//     try {
//         const response = await fetch("https://api.publicapis.org/entries");
//         if (!response.ok) throw new Error(`Failed to fetch data. Status: ${response.status}`);
//         const data = await response.json();
//         const required = data.entries;
//         const name = required[2].API;
//         const link = required[2].Link;
//         heading.innerHTML = `Name : ${name}`;
//         content.innerHTML = `Link : ${link}`;
//     } catch (error) {
//         console.log('Error is : ', error);
//         errors.innerHTML = 'Failed to load api';
//     }
// }

// responseAPI();

// //See you later 😊
