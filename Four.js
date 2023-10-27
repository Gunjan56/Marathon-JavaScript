"use strict";
//part four of javascript

//function methods or explicit binding
//in jaVASCRIPT call apply bind are three methods that are used to manipulate the this 
//keyword in javascript
//call() method => all method is a function in javascript that allows you to call a function with specified this value
//and arguments provided indivisualy
const obj ={
    Name:"xyz",
    class:"10th",
    city:"Noida",
    details(message){
        console.log(`my name is ${this.Name} student of class ${this.class}, and i live in ${this.city}`);
        console.log(`${message}, my name is ${this.Name}`);
    },
};
const obj2 ={
    Name:"pqrs",
    class:"12th",
    city:"delhi",
    details: function(message){
        console.log(`my name is ${this.Name} student of class ${this.class} and i live in ${this.city}`);
        console.log(`${message}, my name is ${this.Name}`);
    },
};
const callMethod1 = obj.details.call(obj2, "Hello");//we can call another object method 
console.log(callMethod1);
console.log(obj2.details());//this keyword in obj2 still points to obj2

//apply =>only deifference between call and apply is that how we pass arguments
//in apply method we pass arguments in arrays
const applyMethod = obj2.details.apply(obj, ["Hey!"]);//apply method
console.log(applyMethod);

//bind method => same as apply but return as function
const bindMethod = obj.details.bind(obj2, ["Good Morning!"]);
bindMethod();//return as function

//Arrow function revisits
//1=>arrow function does not have this keyword 
//2.arrow function inherit this from parents
//this keyword in arrow function points to parent this
//don't use arrow function as method or class because they don't have thier own this
const person = {
    fullName: "John",
    class:`${this}`,
    info: () => `${this.fullName}`,
};
console.log(person.info());//undefined

//Arguments objects
//arguments object is a buit in javascript object that automaticly created inside every object in js
//it is important to note that arguments object is a array like list which means it doesn't have all the array
//methods, it is better to use rest parameter rather than arguments
function userInfo(user1, user2, user3){
    console.log(user1);//arguments
    console.log(user2);//arguments
    console.log(arguments.length);
    console.log(...arguments);//list all array like arguments=>converts arguments into array
}
userInfo("John", "Rohan", "Ram");


//Error Handling in javaScript=>handle Error when a code of block encounter any error
//try...catch....finally
//try=>defines a code block to run,code block to be try
//catch=>defines a code block to handle any error, catch the error in try block
//finally=>defines a code block to run regardles of the result, always runs no matter there is error of not
//throw=>defines a custom error
try{
    console.log(a);
}
catch(error){
    console.log(`the error is ${error}`);
}
finally{
    console.log("I am going to run anyway");
}
// throw new Error("I am new custom error");

//JSON => javaScript object notation => light weight text based format for js objects
//json is a format for storing and transporting data json is often used when data is sent from server to webpage
//JSON syntax rules
//data should be in name/value pair where name should be enclosed in double quotes ("").
//data is seperated by comma (,)
//curly braces({}) holds objects
//square brackets([]) holds array, single quotes are not allowed
//comment and undefined is not allow
//for better understanding look for data.json file

//JSON two method: Parse and stringify
//parse:converts json file into javascript object
//stringify: converts javascript value or object into json string
const j1 = `
{
    "user":[
        {"id":1, "name": "Rohan"},
        {"id":2, "name": "Sohan"},
        {"id":3, "name": "Mohan"},
        {"id":4, "name": "Komal"},
        {"id":5, "name": "Raman"}
    ]
}`;
const j2 = `
    [
        {"id":1, "name": "Rohg"},
        {"id":2, "name": "Soan"},
        {"id":3, "name": "Ean"},
        {"id":4, "name": "omal"},
        {"id":5, "name": "manal"}
    ]`;
console.log(JSON.parse(j2));
console.log(JSON.stringify(j1));

//advance function concepts
//closer look at functions
//default parameter=>when a function is called with no parameter or undefined values for these parameter
//the default values are used, If values are passed as arguments, the passed values will override
//the default values
function defultPara(user, message="Hello"){
    console.log(`if no argument is passed in the function`);
    console.log(`by default parameter takes undefined value`);
    console.log(`message have default parameter ${message}`);
    console.log(`user have no default parameter that is why it is ${user}`);
}
defultPara("John");//takes message="hello" default parameter
defultPara("Rohan", "Hey")//overrides defualt parameter

//Higher order function
//a function which either return another function or takes another function as arguments are called HOF
//function return another function
function userGreet(){
    return function(){
        console.log("return another function");
    }
}
const result = userGreet();
result();//call another function

//function as arguments
function greet(last){
    console.log(`hello ${last}`);
}
function sayHello(first,last){
    let greet = first(last);
    console.log(greet);
}

sayHello(greet, "Rohan")

//first class function => in javascript functions are considered as first class citizens
//which means they are treated like any other variable because of which we can do following things with functions in javascrpt
//variable can store function
//can be passed as arguments in function
//return as value in function

//map filter and reduce
//map filter and reduce are three powerfull array methods in javascript that are used to
//manipulate and transform arrays
//map method=> iterate over every element of array and return new array
const arr1 = [10,20,30,40,50,55, 67,22,44,40];
let result1 = arr1.map((element, index, array)=>{
    // return element+1;
    return element*2;
})
console.log(result1);

//filter => return new array and works on condition
let result2 = arr1.filter((element, index, array) =>{
    // return element % 2 === 0;
    return element >= 50;
})
console.log(result2);

//Reduce => reduce array to a single value
let result3 = arr1.reduce((accumulator, currentValue) =>{
    return accumulator+currentValue;
})
console.log(result3);

//immdiately invoked function expression => iife executed immediately after creation
(function(){{
    console.log("Hello");
}})()

// callback function => when a function is passed as argument to another function
// callback function enables asynchronous programming
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function calc(x,y,operation){
    return operation(x,y)
}
console.log(calc(10,20,add));
console.log(calc(10,30,sub));


// Lexical Scoping => visibility and accessibility of variables within a particular context of code

// Closure => When a function is defined inside another function, the inner function forms a closure with the outer function's variables. This means that the inner function has access to the outer function's variables, even after the outer function has completed execution.
function outerFunction(){
    const message = "Good Morning";
    function innerFunction(){
        console.log(message);
    }
    return innerFunction;
}
const closure = outerFunction();
closure();

//see you in next chapter