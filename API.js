//const url = "https://api.publicapis.org/entries";
// fetch(url).then((res) => res.json()).then((data) =>{
//     const requdata = data.entries;
//     console.log(requdata[0]);
//     console.log(requdata[1]);
// });
// // let url = 'https://catfact.ninja/fact';
// // fetch(url)
// // .then((res) => res.json()).then((data) => console.log(data)).then((result) => {
// //     console.log(url);
// // }).catch((err)=> {
// //     return ("error");
// // })
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


// const heading = document.querySelector(".heading");
// const content = document.querySelector(".content");
// const errors = document.querySelector(".error");
// const api = fetch(url);
// api.then((response) => response.json())
// .then((data) => {
//     const required = data.entries;
//     const name = required[2].API;
//     const link = required[2].Link;
//     heading.innerHTML = `Name : ${name}`;
//     content.innerHTML = `Link : ${link}`;

// })
// .catch((error)=>{
//     console.log('error is :' ,error);
//     errors.innerHTML = `Failed to Load api`;
// });
const heading = document.querySelector(".heading");
const content = document.querySelector(".content");
const errors = document.querySelector(".error");

async function responseAPI() {
    try {
        const response = await fetch("https://api.publicapis.org/entries");
        if (!response.ok) throw new Error(`Failed to fetch data. Status: ${response.status}`);
        const data = await response.json();
        const required = data.entries;
        const name = required[2].API;
        const link = required[2].Link;
        heading.innerHTML = `Name : ${name}`;
        content.innerHTML = `Link : ${link}`;
    } catch (error) {
        console.log('Error is : ', error);
        errors.innerHTML = 'Failed to load api';
    }
}

responseAPI();