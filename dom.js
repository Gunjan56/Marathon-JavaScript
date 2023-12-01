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
let domId = document.getElementById('head1')//built in method that allow us to set dom element based on id attribute
console.log(domId);//in will log my html element corresponding to head1 id into console

let domName = document.getElementsByClassName("head2");
console.log(domName);

let domTagName = document.getElementsByTagName('h3')
console.log(domTagName);

let domQuerySelector = document.querySelector('.para');
console.log(domQuerySelector);//it will return first occurence element

let domQuerySelectorAll = document.querySelectorAll('.para');
console.log(domQuerySelectorAll);//it will return all related html elements

//HTML collection and nodeList => Html collection is a collection of document elements, a nodeList is a collection of document nodes (element nodes, attribute nodes and text nodes)
//HTML collections are typically returned by properties and methods that query the dom like- getElementByTagName, getElementByClassName
//nodeList is typically returned by more advanced methods such as `querySelectorAll` that allow you to use CSS selectors to query the DOM. 
const nodeList = document.querySelector(".target");
const child = nodeList.childNodes;
console.log(child);

const htmlCollection = document.getElementsByClassName("li");
console.log(htmlCollection);

//section 2 => Traversing Elements
