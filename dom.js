//dom => document object model
//its a programing interface for web documents which means it represents the page so that programs can change documents style ,structure and content
//its like a tree structure when page is loaded to the browser
//What we can do with dom?=> with the object model, javaScript get all the power it needs to create dynamic HTML
//1.js can change all the HTML elements in the page
//2.js can change all the HTML attributes in the page
//3.js can change all the css styles in the page
//4. js can remove existing HTML elements and attributes in the page
//5. js can add new HTML elements and attributes in the page
//6. js can react to all existing HTML events in the page
//7. js can create new HTML events in the page

//dom is not the part of js itself but it is a programming interface that available to js code running in the web browser
//it is not a javascript part but instead a web api used to build websites
//the dom is actually implemented by browser and provides a way for js code to access and manipulate the content and structure of an HTML or XML document
//EX=> WEB API(HTML OR XML PAGE) = DOM + JAVASCRIPT

//SECTION 1=> SELECTING ELEMENTS
//Methods to select elements
//getElementById(), getElementsbyName(), getElementsByTagName(), getElementsByClassName(), querySelector(), querySelectorAll()
//Lets do Practical one by one referece => index.html
// let domId = document.getElementById('head1')//built in method that allow us to set dom element based on id attribute
// console.log(domId);//in will log my html element corresponding to head1 id into console

// let domName = document.getElementsByClassName("head2");
// console.log(domName);

// let domTagName = document.getElementsByTagName('h3')
// console.log(domTagName);

// let domQuerySelector = document.querySelector('.para');
// console.log(domQuerySelector);//it will return first occurence element

// let domQuerySelectorAll = document.querySelectorAll('.para');
// console.log(domQuerySelectorAll);//it will return all related html elements

// //HTML collection and nodeList => Html collection is a collection of document elements, a nodeList is a collection of document nodes (element nodes, attribute nodes and text nodes)
// //HTML collections are typically returned by properties and methods that query the dom like- getElementByTagName, getElementByClassName
// //nodeList is typically returned by more advanced methods such as `querySelectorAll` that allow you to use CSS selectors to query the DOM.
// const nodeList = document.querySelector(".target");
// // const child = nodeList.childNodes;
// console.log(child);

// const htmlCollection = document.getElementsByClassName("li");
// console.log(htmlCollection);

// //section 2 => Traversing Elements
// //Get the parents Element
// //parent node property is used to acess the parent node of the dom element , it returns the parent node as an object
// //parentNode is readonly , parentElement property is used to access the parent element of an given element
// let note = document.querySelector(".note");
// console.log(note.parentNode);//read only

// let parent = document.querySelector(".note");
// console.log(parent.parentElement);

// //Getting child element of a node
// //childNodes => childNodes property returns the collection of all the child nodes of a specified parent node
// //children => returns a collection of only direct child elements of a specified parent element
// let parentOfChildNode = document.querySelector(".mainParent");
// console.log(parentOfChildNode.childNodes);//childNode returns comment, text, and other nodes also
// //filter childNode
// let childNodes = parentOfChildNode.childNodes;
// console.log(Array.from(childNodes).filter((node) => node.nodeType === Node.ELEMENT_NODE));

// //children
// let parentChild = document.querySelector(".mainParent");
// console.log(parentChild.children);

// //getting SiblingElements
// let siblingElement = document.querySelector(".Child");
// console.log(siblingElement.nextElementSibling);//returns the next sibling
// console.log(siblingElement.previousElementSibling);//returns the previous sibling element
// console.log(siblingElement.nextSibling);
// console.log(siblingElement.previousSibling);

// //Section 3 => Manipulating Elements
// //textContent, innerText, innerHTML

// //innerText => it represents the visible text content of an element and returns the rendered text content,
// //excluding any style or html tags, when we set innerText property it overwrites the existing content and any child element within the element
// const innertext = document.querySelector(".par");
// console.log(innertext);
// innertext.innerText = "Hello JavaScript=> I just chnge the text";
// innertext.innerText = "hello all i am using italic text by innerText property";//this is overwriting above text

// //textContent => it represents the text content of an element it returns the raw text content including spaces linebreak, and it does not consider css styling
// const textCon = document.querySelector('.par');
// console.log(textCon.textContent);//it returns the only text content of element's inside
// textCon.textContent = "hello js developers!!!";//for the first html element it is overwriting the original text

// //innerHTML=> it represents the HTML content with in an element including any child elements and thier html markup.
// let  p = document.querySelector('.par1');
// // p.innerHTML = "Happy Coding";
// p.innerHTML = "Hello Good morning";
// console.log(p);

//Section 4 => working with attrubutes
//HTML attribute and dom object's Properties
//setAttribute=> set the value of a specified attribute on a element
// const btn = document.querySelector('.button');
// btn.setAttribute('class', 'btnnn');

//getAttribute=> get the value of an attribute on an element
// const btnGet = document.querySelector('.btnn');
// let result = btnGet.getAttribute('class');
// console.log(result);
//RemoveAttribute=> remove an attribute from a specified element
// const removeAtt = document.querySelector('.btnn');
// removeAtt.removeAttribute('class');
//hasAttribute=> check if an element has a spcify attribute of not
// const hasAtt = document.querySelector('.btnnn');
// const res = hasAtt.hasAttribute('class');
// console.log(res);

//Section 5 => Manipulating Elements Styles
//style property=> get or set inline style of an element
// const domStyle = document.querySelector(".main");
// domStyle.style.height = "100px";
// domStyle.style.width = "100px";
// domStyle.style.margin = "auto";
// domStyle.style.marginTop = "20px";
// domStyle.style.justifyContent = "center";
// domStyle.style.display = "flex";
// domStyle.style.flexWrap = "wrap";
// domStyle.style.backgroundColor = "red";
//getComputedStyle=>return the computed style of an element
// let style = getComputedStyle(domStyle, "backgroundColor");
// // console.log(style);//it will return window object
// let styleRe = getComputedStyle(domStyle);
// console.log(styleRe.color);
// console.log(styleRe.display); //it will return what we want
//className Property=> return a list of space sperated css classes
// let classNa = domStyle.className;
// console.log(classNa);
//classList Property=> manipulate css classes of an element
// domStyle.classList.add("new");
// console.log(domStyle.className);
// //Elements width and height=> get the width and height of an element
// let width = domStyle.offsetWidth;
// let height = domStyle.offsetHeight;
// console.log({ width, height });

//Section 7 => Working with events
//javaScript Events => Introduce use to javaScript events, The event models and how to handle those events
//Handling events=> when an event ocurs you can create an event handler which is a piece of code that will execute to respond to that event. an event handler is also known as event listener , it Is function with an explicit name if you intend to reuse it an event can be handled by one or multiple event handlers
//ways to assign event handlers
//1.onclick
// let onClickEvent = document.querySelector(".btn");
// function onClickEventBtn() {
//   onClickEvent.textContent = "You Clicked Me!";
// }
// //2.addEventListener=> it accepts the three arguments an event name, and event handler function and a boolean value that instructs the method to call the event handler during the capture phase(true) or during the bubble(false) phase
// onClickEvent.addEventListener(
//   "click",
//   () => {
//     onClickEvent.textContent = "You Just Clicked Me!";
//   },
//   false
// );
// onClickEvent.addEventListener(
//   "click",
//   (event) => {
//     alert("You Clicked Me Again!");
//   },
//   false
// );
//3. removeEventListener() =>Removes an eventListener That was added by addEventListener. you need to pass same arguments as you used to pass For addEventListener
// function greet() {
//   onClickEvent.textContent = "Hello Js Developer";
// }
// onClickEvent.addEventListener("click", greet);

// onClickEvent.removeEventListener("click", greet); //Note => using the anonymous event listener will not work
// onClickEvent.removeEventListener('click', function removeClickEvent(){
//     console.log("Clicked me");//this will not work
// })

//page load events => to handle the page load events we can call the addEventListener on teh document object
// document.addEventListener("DOMContentLoaded", () => {
//   //handle DOMContentLoaded
//   console.log("The page is fully loaded");
// });
// document.addEventListener("load", () => {
//   //handle load event
//   console.log("The page is fully loaded");
// });

// document.addEventListener("beforeunload", (event) => {
//   //handle before unload event
//   event.preventDefault();
//   event.returnValue = "";
// });

// document.addEventListener("unload", (event) => {
//handle unload event
//send analytic data
// });
//load event
//windows load event=> for the window object the load event is fired when the whole webpage is loaded
//to handle the load event you register the eventListener using addEventListener
// window.addEventListener("load", (event) => {
//   console.log("page has fully loaded");
// });
//by using onload property
// window.onload = (event) => {
//   console.log("Page loaded"); //it is good practice to use addEventListener
// };

//the image's load event=> load event also fires on Images
// let img = document.querySelector("#logo");
// img.addEventListener("load", (event) => {
//   console.log("logo has been loaded");
// });

// img.src = "images.jpg";

//DOMContentLoaded=> DomContentLoaded fires when DomContent Loaded without waiting for images and stylesheets to finish loading.
//You need to handle to DOnContentLoaded Event when you place the javaScript in the head of the page but referencing elements in the body

// document.addEventListener("DOMContentLoaded", () => {
//   let btn1 = document.querySelector(".Reset");
//   btn1.addEventListener("click", () => {
//     // handle the click event
//     console.log("clicked");
//   });
// });

// //beforeunload event=> js before unload event that allows you to display a confirmation dialog when before you leaves a webpage
// //Before the webpage and its resources are unloaded the before unload event is fired, At this time the webpage is still visible and you have the opportunity to cancle the event, to register the beforeunload event use window.addEventListener
// window.addEventListener("beforeunload", (event) => {
//   event.preventDefault();
//   event.returnValue = "";
// });

//unload event+> unload Event fires when document has completely unloaded, typically unload event fires when you navigate form one page to another
//Note: You should never use the unload Event it's only for reference

// window.onunload = (event) => {
//   console.log("The page is unloaded");
// };

//MOuse events=>Mouse Events Fires when you use the mouse to interact with the element with the page
//MouseDown, MouseUp, Click, dblclick, mouseover, Mouseout,mousemove
// let mouseEvent = document.querySelector(".event");
// img.addEventListener("mouseover", (event) => {
//   console.log("clicked");
// });

//keyboard events=>When you interect with keyboard, the keyboard events are fired. there are three main keyboard events
//keydown, keyup, keypress
// let message = document.querySelector(".text");
// message.addEventListener("keydown", (event) => {
//   console.log(`key: ${event.key}, code: ${event.code}`);
// });

// message.addEventListener("keyup", (event) => {
//   console.log(`key: ${event.key}, code: ${event.code}`);
// });

// message.addEventListener("keypress", (event) => {
//   console.log(`key: ${event.key}, code: ${event.code}`);
// });
// //scroll events=>when you scroll a document or page scroll events fire you can trigger scroll events , using a scrollbar manually,using th mouse wheel,clicking an id link,calling function in js
// let control = document.querySelector("#control");
// control.addEventListener("click", (event) => {
//   let div = document.querySelector("#scrollDemo");
//   let target = event.target;
//   switch (target.id) {
//     case "Left":
//       div.scrollLeft += 20;
//       break;
//     case "Top":
//       div.scrollTop += 20;
//       break;
//   }
// });
//Focus events=> focus events fires when an element recives or loses the focus there are two main focus events
//focus, blur, fucusout and focusin fires at the same as focus and blur
//elements that are focusable windows, Alt+Tab, Links, FormField,elements with tab index
// const pwd = document.getElementById("form1");
// pwd.addEventListener("focus", (e) => {
//   e.target.style.backgroundColor = "yellow";
// });

// pwd.addEventListener("blue", (e) => {
//   e.target.style.backgroundColor = "";
// });
//scrollIntoView events=> suppose you have a list of element and you just want  a specific element to highlighted and scroll into view
//to achive this you can use the element.scrollIntoView() method the element.scrollIntoView method accepts a boolean value or an object
// Element.scrollIntoView(alignToTop) or element.scrollIntoView(options)
// let btn = document.querySelector("#btn");
// let el = document.querySelector(".special");
// btn.addEventListener("click", (e) => {
//   // el.scrollIntoView(true);
//   el.scrollIntoView(false);
// });

//haschange event=>the URL hash everything that follows the pound sign(#) in the URL for ex suppose you have the following URL
//https://www.javascripttutorial.net/javascript-dom/javascript-hashchange/#header
//the URL hash is header if the URL changes to footer then it will be #footer
//so the URL hashchange event fires when the URl hash changes from one to another
// window.addEventListener("hashchange", () => {
//   console.log(`the current URL is ${location.hash}`);
// });

//event delegaton=>lets see how to use the javaScript event delegation that adds a single event handler to the parent element
//intead of having to register multiple event handlers to the child elements

// let home = document.querySelector("#home");
// home.addEventListener("click", (e) => {
//   console.log("Home menu item was clicked");
// });

// let dashboard = document.querySelector("#Dashboard");
// home.addEventListener("click", (e) => {
//   console.log("Dashboard menu item was clicked");
// });

// let report = document.querySelector("#report");
// home.addEventListener("click", (e) => {
//   console.log("Report menu item was clicked");
// });
// Note=>Instead of having multiple event handlers we can just asign single event handler to handle all the click events
// let menu = document.querySelector("#menu");
// menu.addEventListener("click", (event) => {
//   let target = event.target;
//   switch (target.id) {
//     case "home":
//       console.log("Home menu item was clicked");
//       break;

//     case "Dashboard":
//       console.log("Dashboard menu item was clicked");
//       break;
//     case "report":
//       console.log("Report menu item was clicked");
//       break;
//   }
// });
//dispatch Event=>lets learn how to programatically create and dispatch events using event constructor and dispatch event method
//to create a new event you can use Event constructor
// let event = new Event(type, [, options]);
// let btn2 = document.querySelector(".btn2");
// btn2.addEventListener("click", () => {
//   alert("Mouse Clicked!");
// });
// let clickEvent = new Event("click");
// btn2.dispatchEvent(clickEvent);
// //cuatom events=> jaavascript custom events such as creating custom events and dispatching it.lets change the background color of body while clicking on a button
// let Btn1 = document.querySelector("#Btn1");
// let body = document.querySelector("body");
// let currMode = "light"; //dark

// Btn1.addEventListener("click", (event) => {
//   if (currMode === "light") {
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
// });

//MutationObserver=> lets learn about how to use the js mutationObserver API to watch the changes being made to the DOm tree
//The Mutation Observer API allows you to monitor for changes being made to Dom tree, When the Dom node change you can invoke a callback function to react to the changes
//first, difine the callback function that will excute when dom changes
//second create a MutationObserver object and pass the callback to the mutation observer constructor
//Third, call the observe() method to stsart observing the dom changes
// function waitForElement(selector) {
//   return new Promise((resolve, reject) => {
//     if (document.querySelector(selector)) {
//       return resolve(element);
//     }

//     const observer = new MutationObserver(() => {
//       const element = document.querySelector(selector);
//       if (element) {
//         resolve(element);
//         observer.disconnect();
//       }
//     });
//     observer.observe(document.body, {
//       chidList: true,
//       subtree: true,
//     });
//   });
// }
//section 8 => Scripting Web forms
//javaScript Form=>lets learn about js form API

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  // update the class for the input
  input.className = type ? "success" : "error";
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();

  // validate the form
  let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements["email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  // if valid, submit the form.
  if (nameValid && emailValid) {
    alert("Demo only. No form was posted.");
  }
});

//Radio button

//check box
//select Box
//Add/Remove Options
//Removing Items from <select> element conditionally
//Handling change event
//Handling input event

//Projects in next chapter 😁😀
