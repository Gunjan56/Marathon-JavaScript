//synchronouns and asynchonous code
//synchronous code executes sequentially, blocking the execution untill a task is completed
//before moving to the next one
//code is run line by line
/*const greet = "Hello User";
console.log(greet);
console.log("Hello");
console.log(greet, "javaScript");

//asynchronous code => it allows code to be executed concurrently or nonblockingly
//diffrent ways to achieve async code - using callbacks, Promises, async await
const str = "Hello JavaScript";
const str1 = "Asynchronous Code: ";
const str2 = 'Code not run line by line';
setTimeout(() => {
    console.log(str, str1, str2);
},3000);
console.log("Hello JS developers");//it will executed first then after 3 second setTimeout code wil be executed

//Event Loop => it is the key part of how javascript handles async code, IT is like traffic controller that manages the flow of code execution
//in non blocking way by placing function in a queue and executing them one by one when they are ready

//Now Lets Learn About AJAX => Asynchronous Javascript and XML
//used to send and retrive data from a server without reloading the entire web page
//XML => data format for exchanged data but now a days JSON is used more commonly
//AJAX leverage the XMLHttpRequest(XHR) object in js to Make Async HTTP Requests to a server
//These request is used to fetch data, send data or update parts of a web page dynamically
//AJAX is a developers dream : because you can:
//read data from a web server - after the page has loaded
//update a webpage without reloading the webpage
//send data to a webserver- in the background


//Promises => in js a promise is an object that represents the completion or failure of an async operation and its resulting value
//Promises are a way to handle async code more efficiently, provides a clean and organised way to work with async code
//commonly used in modern javascripty as compared to callbacks
//State of Promise=> Pending, Fullfilled, Rejected
//promise => fullfilled accepted rejected
const myPromise = new Promise((resolve, reject) => {
    //if successful call resolve, if error call reject
    let condition  = true;
    if(condition){
        resolve("Promise is resolved");
    }
    else{
        reject("Promise is rejected");
    }
});
myPromise.then((response) =>{
    console.log("response of Promise: " , response);
    return response;
    //chaining a promise => myPromise.then().then().catch()
}).then((data) => {
    console.log("do something with data");
    console.log(data);
}).catch((error) => {
    console.log('error is ', error);
    throw new Error(error);
});*/

//API => Aplication Programing Interface
//set of rules and protocols that allow different software applications to communicate or interct with each other
//An API is a set of rules that allow different computers to interect with each other
//share information and perform specific actions 
//Working with api
//XML, Fetch api
//Free API Link : https://github.com/public-apis/public-apis
//different methods of api=> GET=> used to retrieve data from server, POST=> used to send data to the server
//,PUT=> used to update or replace an existing resource on the server, DELETE=> used to deletion of resource on the server

//XHR or XMLHttpRequest Method => it anables the exchange of data between client and the server without requiring a full page reload
//events that you can handle to track the progress and status of the request
//onreadystatechange, onload, onerror, onprogress, ontimeout

//Country API example
//Country api example //api url : https://restcountries.com/v3.1/name/{name} 
//"https://restcountries.com/v3.1/name/russia => this api endpoint will give you russia information 

//Create a new XMLHttpRequest object
let request = new XMLHttpRequest();

//lets configure it
request.open("GET", "https://restcountries.com/v3.1/name/russia");
// request.responseType = "json";

request.onload = function(){
    console.log(request.response);
    console.log(JSON.parse(request.response));
    console.log(request.status);

    if(request.status >=400){
        console.log('faild');
    }else{
        console.log(request.response);
    }
};

request.onerror = function(){
    console.log("ERROR");
}

//send the request over the network
request.send();

//json fake api example

//fake json api example 
//api url : https://jsonplaceholder.typicode.com/users 
//Create a new XMLHttpRequest object let request

let fakeRequest = new XMLHttpRequest();
fakeRequest.open("POST", "https://jsonplaceholder.typicode.com/users ");
fakeRequest.setRequestHeader("Content-Type", "application/json");
fakeRequest.onload = function(){
    console.log(fakeRequest.response);
    console.log(JSON.parse(fakeRequest.response));
    console.log(fakeRequest.status);

    if(fakeRequest.status >= 400){
        console.log("faild");
    }else{
        console.log(fakeRequest.response);
    }
};
const body = {
    name: 'testing data',
    power:"78 hrs",
};

//send the request over the server
fakeRequest.send(JSON.stringify(body));

//header in api => while making http request to api header refers to the additional information sent along with the request
//header is nothing but key-value pairs
//commom headers used in api request => 1.("content-type", "application/json"), 2.Authorization(tokes or api keys), 3.Accept ("Application/json", "text/html"), 4.User-Agent, Cache-Control, Cookie.


