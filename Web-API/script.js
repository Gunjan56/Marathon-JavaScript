//Now lets learn about Web API's specified in HTML5 specification. These web APIs allows you to use the modern functions
//provided by the modern browsers in your modern web application
//Section1 => Client Storage, Section2 =>Form Data API, Section3=>Drag and Drop API, Section4=>Geolocation API, Section5=>Notification API, Section6=>Canvas API, Section7=> History API, Section8=>Network Requests

//Section1=> Cookies, LocalStorage, sessionStorage, IndexedDB
//cookie=> cookie is a piece of data that a server sends to a web browser. the web browser then stores it in users computer and sends the cookie back to
//the same server in the subsequent requests. the server uses cookies for identifying if two successive request
//came from the same browser. to manage cookies we use document.cookie object to make it more efficient, you can use the cookie utility class
//use the encodeURIComponent() and decodeURIComponent() function to encode and decode the cookie values
// document.cookie = "Name: John";
// document.cookie = "class: B.tech";
// document.cookie = "Name: Rohan"; //update cookie
// document.cookie = "Name = Rohan; expires= thur,02 nov 2023 12:00:00 UTC"; //set expiry date
// const cooki = document.cookie;
// console.log(cooki); //read cookie
// document.cookie = `${decodeURIComponent("username")} = ${encodeURIComponent(
//   "password"
// )}`; //it is good practice to use decodeURIComponent and encodeURIComponent function while setting cookies

//local storage=>local storage is an instance of storage type that allows you to store persistent data in the web browser
//local storage can store only strings to store objects you convert them to strings using the JSON.stringyfy() and you converts the string into objects when you retrive them from the local storage using the json.parse() method
// localStorage.setItem("Name", "Gunjan");
// localStorage.setItem("Branch", "IT");
// console.log(localStorage);
// console.log(localStorage.getItem("Name"));
// localStorage.removeItem("Branch");
// localStorage.clear();

//session Storage=>the session storage object stores data only for a session which means that the data stored in the session storage will be deleted when the browser is closed
// sessionStorage.setItem("Name", "john");
// console.log(sessionStorage);
// console.log(sessionStorage.getItem("Name"));
// sessionStorage.removeItem("Name");

//IndexedDB=>indexedDB is a large scale object store built into the browser, allows you to store data into key value pairs
//Values can be any javaScript data types indexedDB allows you to create web applications that work both online and offline
//It's useful for that stores the large amount of datathat don't need persistent internet connection
//For example google docs Uses the indexedDB to store the cached documents in the browser and synchronizes with the server once in a while
//this allows google Docs to incrase performance while enhancing user experinces, and you will find other types of applications that heavily used indexedDB like online notePad, quizzes, todo lists, code sandboxex and CMS.
// console.log(indexedDB.open("CSM")); //it returns a promise in pending state
// console.log(indexedDB);

//Section2 => FormData API =>Now Lets Learn about the JavaScript Form data API and how to post the form data using fetch API
//suppose you hava a subscription form with two fields name and email

// const btn = document.querySelector("#submit");
// const form = document.querySelector("#subscription");
// const message = document.querySelector("#message");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
// const formData = new FormData(form);
// const values = [...formData.entries()];
// console.log(values);

// subscribe();
// });

// const subscribe = async () => {
//   try {
//     let response = await fetch("subscribe.php", {
//       method: "POST",
//       body: new FormData(form),
//     });
//     let data = await response.json();

//     showMessage(data.message, response.status == 200 ? "success" : "error");
//   } catch (error) {
//     showMessage(error.message, "error");
//   }
// };

// const showMessage = (message, type = "success") => {
//   message.innerHTML = `div class='alert alert-${type}'> ${message}`;
// };

//JavaScript Drag and Drop API=>HTML5 formaly introduced the drop and drag specification most modern web browsers have
// implemented native drag and drop based on HTML5 spec.By default only image and text can be draggable, to drag an imae you simply hold an mouse button down and then move it
//to drag the text you simply need to highlight the some text and drag it in same way as you would drag an image
//to drag an event you can set dragable HTML5 att to true
//when you drag an element these events fires in the following sequence
//dragstart(), drag(), dragend()
/* draggable element */
const item = document.querySelector(".item");

item.addEventListener("dragstart", dragStart);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

/* drop targets */
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");

  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove("hide");
}
