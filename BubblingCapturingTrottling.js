//Event Bubbling , Capturing and Propagation and Immediate Propagation , stopPropagation and preventDefault()=>
//Event bubbling => It is a Concept like Bubbles Goes from Bottom to up Which means I have created a Grand Parent Div Followed By Parent din And then a child div So Basically Event bubbling in this case
//will go from child div then parent and then grand parent obviously by adding a event listener if i click on my child div then first it will call child then parent then grand parent div
//Lets see an example => i Hane created three divs into my index.html
const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// grandParent.addEventListener("click", (e) => {
//   console.log("grand Parent Cliked");
// }, false);

// parent.addEventListener("click", (e) => {
//   console.log("Parent Cliked");
// }, false);

// child.addEventListener("click", (e) => {
//   console.log("Child Cliked");
// }, false); //If i cliked on child div then it will log child clicked, parent clicked, grand Parent Clicked, and if i clicked on paretn div then it will log parent clicked, grand parent clicked but ignores the child and also if i clicked on grand paretn then it will log in console grand parent clicked
//so event bubbling is cpturing the events from Down to up

//Now lets see an example of Event capturing
//Suppose I have the same code as Event bubbling and i Performing the same Action but i will set the Third argument for addEventListener as true beacuse by default it is false so if i set this as true then it will stop event bulling and show event capturing

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grand Parent Cliked");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent Cliked");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("Child Cliked");
//   },
//   true
// ); //So now it is going in sequece wise manner like if i clicked on child div then first it will log grand parent then parent then child and if i click on parent then it will log in console
//grand Parent and then parent so now it is going top to bottom Note => in browser Events goes from capturing to bubbling

// Lets see another example
// grandParent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grand Parent Cliked");
//   },
//   true//capturing
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent Cliked");
//   },
//   false//bubbling
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("Child Cliked");
//   },
//   true//capturing
// ); //Now if i clicked on child div then it will log in console grand Parent,child, parent div beacuse For child div Event Capturing is true so it will go for top and for parent also it set to true so it will log Grand Parent the check for Parent and for Parent there is Event bubbling so First it will ignore this behaviour and log child and then it will log Parent Bacause of Its by deafult Event Bubbling
//of Down to top

//stopPropagation => It will stops the Event bubbling and capturing and It will stops the excution of next code like if I call stop Propagation in Event bubbling and clicking on child div then it will log child div and Parent div and completely ignores the next ones which is Grand Parent according to bubbling
//Beacuse it sees that we are calling stop Propagation for stoping the bubbling and capturing in Parent div

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grand Parent Cliked");
//   },
//   false
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent Cliked");
//     e.stopPropagation();
//   },
//   false
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("Child Cliked");
//   },
//   false
// );

//stopPropagation in case of Capturing=> Now if i Click on child div then It is only log Grand Paretn clicked beacuse here we are using event capturing and stopPropagation for grandParetn div
//So it stops the execution for next ones either i am clicking on parent or child div both are not excesible.
//immediatePropagation => same as Propagation but is will stops excution immediatly
// grandParent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grand Parent Cliked");
//     // e.stopPropagation();
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent Cliked");
//     e.stopImmediatePropagation();
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("Child Cliked");
//   },
//   true
// );

//PreventDefault()=> It stops the default behaviour of browser or Events like if we click on a link the it opens in another tab or in same tab, or if we click on a button then it performs some action like it will submit the form by deafult or refresh our page
//so to stop these behaviours we use preventDefault method obviously it will take an event to stop the dafult behaviour of that event
// const btn = document.querySelector(".btn");
// const a = document.querySelector("a");

// a.addEventListener("click", (e) => {
//   e.preventDefault(); //now it is not opening the my style.css file but performing the next action like log in console cliked
//   console.log("Clicked");
//   let counter = 0;
//   counter++;
//   console.log(counter);
// });

// btn.addEventListener("click", (event) => {
//   //now this function will stop the browser top refresh the page while clicking on the button inside the form beacuse forms default bahaviour is to post or get date while submitting
//   event.preventDefault();
//   var n = 10;
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
//   console.log("You are done with this loop!!@");
// });

//Throttling in js =>throttling is a technique that limits how often a function can be called in a given period of time
//So it is useful for improving the performance and responsiveness of web pages that have event listener that triggers heavy or
//expensive operations like animation, scrolling,resizing or fetching data etc

const throttling = function (fn, d) {
  return function (...args) {
    document.querySelector("#throt").disabled = true;
    document.querySelector("#throt").style.opacity = "0.5";
    setTimeout(() => {
      fn();
    }, d);
  };
};

const thrott = throttling(() => {
  document.querySelector("#throt").disabled = false;
  document.querySelector("#throt").style.opacity = "1";
  console.log("Clicked");
}, 4000);

const btnClick = document.querySelector("#throt");
btnClick.addEventListener("click", thrott); //So when user click on this button then after 4 sec it logs in console clicked and during this period of time
//button is enabled which means click evetn is not accessible and after the 4 sec it is again accessible
