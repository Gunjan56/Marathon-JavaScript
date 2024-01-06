//BOM => Browser Object Model is the core of JavaScript on the web. The BOM Provides you with objects that exposes's the web Browsers functionality
//BOM allows The JavaScript to interact With the Borwser
//Bom => Section 1 => Window, Section 2 =>Location, Section 3 => Navigator, Section 4 => Screen, Section 5 => History
//Section 1 => Window Object => The global Object OF javaScript in the web Browser is the window
//Object. It means that all the functions and varibles declared globally with var keyword become the
//properties and methods of window object
var a = 1;
var sum = (a, b) => a + b;
console.log(window.a);
console.log(window.sum(2, 3));

//The Window Object Exposes the Functionality of web Browser to the web page
//1) Window.size()=> window onject has four Properties related the size
//innerWidth, innerHeight, outerWidth, OuterHeight=> innerWidth, innerHeight returns the size of page viewport inside the browser Window(not including the borders and toolbars)
//the outerWidth and outerHeight returns the size of window itself
console.log(window.innerHeight, window.innerWidth);
console.log(window.outerHeight, window.outerWidth);
//get the height of window
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
console.log(width);

const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
console.log(height);

//2) Open a new Window =>to open am new Window or tab you use the window.Open() method id takes three arguments, THe URL to load, The target and a string of window features
// window.open(
//   "https://www.javascripttutorial.net/javascript-bom/javascript-window/",
//   "Js tutorial",
//   "height=600,width=800"
// );

//resize a window=>to resize a window you use the resizeTo() method of the window Object.
// let jsWindow = window.open(
//   "https://www.javascripttutorial.net/javascript-bom/javascript-window/",
//   "Js tutorial",
//   "height=600,width=800"
// );

// setTimeout(() => {
//   jsWindow.resizeTo(600, 300);
// }, 1000);

//the resizeBy() => it allows you to resize the current window by specified amount
// window.resizeBy(deltaX, deltaY);
// let windowResizeBy = window.open(
//   "https://www.javascripttutorial.net/javascript-bom/javascript-window/",
//   "Js tutorial",
//   "height=600,width=800"
// );

// setTimeout(() => {
//   windowResizeBy.resizeBy(-100, -100);
// }, 1000);

//there are many other properties same the open and resize like move the window we use window.moveTo(),moveby() methods, for close the window we use window.open() and then inside setTimeOut() we use wimdow.close() method
// let windowResizeBy = window.open(
//   "https://www.javascripttutorial.net/javascript-bom/javascript-window/",
//   "Js tutorial",
//   "height=600,width=800"
// );

// setTimeout(() => {
//   windowResizeBy.close();
// }, 1000);

//alert() method => the borwser can invoke a system dialog to display informaton to the user
//to invoke the an alert system dialog you invoke the alert method of window object
// alert("You are learning javaScript BOM"); //or
// window.alert("You are learning javaScript BOM"); //Note that the alert message is synchronous and modal it means
//that code execution is stops when the dialog is displayed and resumes the code when it has been dismissed

//confirm() =>To invoke a dialog with a question and two buttons ok and cancel, you use the confirm method of window object
// let result = window.confirm();
// let result = confirm("Are you sure you want to delete this page?");
// let message = result
//   ? "You cliked the Ok button"
//   : "You cliked the cancel button";
// alert(message);

//prompt() => prompt is a method of window object. THe prompt method instruct the web browser to display a dialog with a text, text input field and a ok and cancel button
// let result = prompt("how old are You? ");
// console.log(result);

// let language = prompt("what is your favorite Programming language? ");

// let feedback =
//   language.toLowerCase() === "javascript" ? `it's great` : `it's ${language}`;
// alert(feedback);

//javaScript setTimeOut() =>the settimeOut is the method of window Object(), the SetTimeOut() sets a timer and executes the callback function after the timer expires
// var timerId;
// function showAlert() {
//   timerId = setTimeout(alert, 3000, "setTimeOut demo");
// }
// function clearAlert() {
//   clearTimeout(timerId);
// }
// document.querySelector(".btn1").addEventListener("click", showAlert);
// document.querySelector(".btn2").addEventListener("click", clearAlert);

//javaScript is a single threaded therefore it only can do one task at a time it means that is can only carry
//a single task a given time, bisides the javaScript engine, the web Browser has other Component such as event loop, call Stack and web API
//when you call the setTimeOut the javaScript Engine creates a new function execution context and places it onto call stack

//setInterval is a method of window object, the set interval repeatdely calls a function with a fixed delay between each call
// var inervalId;

// function toggleColor() {
//   let e = document.querySelector(".flashText");
//   e.style.color = "black" ? "white" : "red";
// }
// function stop() {
//   clearInterval(inervalId);
// }

// function start() {
//   inervalId = setInterval(toggleColor, 3000);
// }

// document.querySelector(".start").addEventListener("click", start);
// document.querySelector(".stop").addEventListener("click", stop);

//Section 2 => Location Object=> window.location() the location object represents the current location of a document or window
//You can access the location object by refrencing location property of window object
console.log(window.location);
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.port);
console.log(window.location.host);
console.log(window.location.pathname);
console.log(window.location.search);

//The location object has number of useful methods - assign(), reload(), replace()
//assign() methods takes an string URL and navigate to that URL immediately and make an entry in the browser's stack
// window.location.assign(
//   "https://www.javascripttutorial.net/javascript-bom/javascript-location/"
// );

//location.replace() => same as assign method but it does'nt create a new entry in the browser's stack. therefore you can't click the back button to go to the previous pagese
// setTimeout(() => {
//   location.replace("https://www.javascripttutorial.net");
// }, 1000);

//location.reload() =>reloads the currently displayed page
// window.location.reload(true);

//redirect => lets learn how to redirect to a new page or URL
// location.href = "https://www.javascripttutorial.net";//redirects to new page
// window.onload(location.href("https://www.javascripttutorial.net"));

//javaScript get Query String => lets learn how to use URLSearchparams to get query string parameter in javaScript
//to get a query string you can access the search property of the location object
console.log(location.search);
const urlsearchparams = new URLSearchParams("?type=list&page=20");
console.log(urlsearchparams); //the search URL params is an iterable object hterefore you can use for---of structure to iterate over the it's elements which are query string parameters
for (const [key, value] of urlsearchparams) {
  console.log(`${key}:${value}`);
}
//check if rpoperty exists
console.log(urlsearchparams.has("type"));
console.log(urlsearchparams.has("foo"));

//section 3 => Navigator Object =>js navigator Provides information about the web browser and it's capability
//YOu can reference the navigator object by the read only window.navigator object
console.log(window.navigator.userAgent);
console.log(window.navigator.languages);
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.mediaDevices);

//section 4 => Screen object=>the screen object provides the attributes of the screen on which the current window is being rendered.
console.log(window.screen);
console.log(window.screen.height);

//Section 5 => JavaScript History =>When you launch the web browser and launch te new web page it creates the new history in the browsers history stack
//if you navigate to another webpage then it also creates the new entry in history stack
//the history stack stores the current page and the previous page you visited
console.log(window.history);
//the history object provides three methods=> back(), forward(), go()
// console.log(window.history.back());
console.log(window.history.forward());
// console.log(window.history.go());

//So that was all about JavaScript BOM ,Hope you enjoyed it well :)
