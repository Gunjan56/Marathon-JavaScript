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
const domStyle = document.querySelector('.main');
domStyle.style.height = '200px';
domStyle.style.width = '300px';
domStyle.style.margin = 'auto';
domStyle.style.marginTop = '20px';
domStyle.style.justifyContent = 'center';
domStyle.style.display = 'flex';
domStyle.style.flexWrap = 'wrap';
domStyle.style.backgroundColor = 'red';
//getComputedStyle=>return the computed style of an element
let style = getComputedStyle(domStyle,'backgroundColor');
// console.log(style);//it will return window object
let styleRe = getComputedStyle(domStyle);
console.log(styleRe.color);
console.log(styleRe.display);//it will return what we want
//className Property=> return a list of space sperated css classes
// let classNa = domStyle.className;
// console.log(classNa);
//classList Property=> manipulate css classes of an element
domStyle.classList.add('new');
console.log(domStyle.className);
//Elements width and height=> get the width and height of an element
let width = domStyle.offsetWidth;
let height = domStyle.offsetHeight;
console.log({width, height});


//Section 7 => Working with events
//javaScript Events
//Handling events
//page load events
//load event
//DOMContentLoaded
//beforeunload event
//unload event
//MOuse events
//keyboard events
//scroll events
//Focus events
//scrollIntoView events
//haschange event
//event delegaton
//dispatch Event
//cuatom events
//MutationObserver

//section 8 => Scripting Web forms
//javaScript Form
//Radio button
//check box
//select Box
//Add/Remove Options
//Removing Items from <select> element conditionally
//Handling change event
//Handling input event


//Projects in next chapter 😁😀
