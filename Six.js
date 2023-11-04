//Modules
// javascript modules allow us to break code into seprate Files
//type="module" in the <script> tag
//create another.js file
//create second.js file
//import and export
// import { greet } from "./another.js";
// greet();

// import {str as another} from "./another.js";
// console.log(another);
// //import all
// import * as myObject from "./another.js";
// myObject.greet();

// //using default export
// import ps from "./second.js";
// console.log(ps);

//Regular expression or Regex in js=> pattern used to match and manipulate text, most commanly 
//used for validate input , search patterns in strings and replace parts of strings
//syntax
// const reg = /replace me/g;
const regularExp = `JavaScript is the only language that I'm aware of 
that people feel they don't need to learn before they start using it.`

const regex = /they/g;
let result = regularExp.replace(regex, "THEY");
console.log(result);

//Symbol in js => primitive datatype which is rarely used in js
//it it a unique identifier
const uniqueValue = Symbol("Hello Javascript");
console.log(uniqueValue);
const value = Symbol("Hello Javascript");
console.log(uniqueValue === value);//false

//symbol in object
const obj = {
    Name : "xyz",
    city: "noida",
    [value]: "symbol inside object",
}
console.log(obj);

//isArray in js => check for array and returns boolean
const arr = [12,4,5,2,4];
console.log(Array.isArray(arr));//true
const str = "Hello";
console.log(Array.isArray(str));//false

//toString => returns string object 
const string = "hellow";
const stin = [1,2,3,4,5];
console.log(string.toString());
console.log(stin.toString(), typeof stin);// 1,2,3,4,5 , object

//toFixed => converts a number to a string by given any value inside toFixed method we can round up the decimal vlaue
const deciValue = 234.78990;
console.log(deciValue.toFixed(2));//234.78

//isNaN=> Not a number => returns true if value isNaN, it converts a value into number before testing
let num = isNaN(234);
console.log(num);//false
let num1 = isNaN("Hello");
console.log(num1);//true

//Arrow function does not have argument object, arguments is availabel with in regular functions
const arrgu = function (){
    console.log(`${arguments}`);
}
arrgu();//no error

// const arguFun = (a,b)=> `${arguments}`;
// arguFun()//arror

//fix arguments problem in arrow function using rest parameter
const argumetsFun = ((...arg) => console.log(`${arg}`));
argumetsFun(2,3);

//declaring variable shorthand
//longhand 
let a=20;
let b=5;
let c=10;
//short hand method
let x=10,y=5,z=20;

//Nullish coalescing operator(??)=> logical operator that returns if its right hand side operand 
//when its left hand side operand is null or undefined or else returns its left hand side operand
let arr1 = [];
if(arr1 === null || arr1 === undefined){
    console.log('arr1 is null or undefined');
}
//if arr is null or undefined or have some value
// let arr2;
let arr2 = 10;
const resultNullish = arr2 ?? "null or undefined";
console.log(resultNullish);

//optional chaining(?.)=>optional chaining operator allow us to access the value of a property 
//that located deep within a chain of objects without explicitly checking if each reference in the chain is null or undefined
//optional chaining
const optionalChain = {
    name: "John",
    city: "Lucknow",
    Friends: {
        Name: "Rohan",
        Name: "sohan",
    },
}
const resultChaining = optionalChain.Friends?.Name;
console.log(resultChaining);

//short circuit => a type of logical operators when evaluting boolean expressions 
//js provides two types of logical operators logical or || and logical and &&
//logical or => checks for true value if first value is true then it will not check for second value if first value is not truthy value then it will check for both values
//or(||) stopes as soon as truthy vlaue encountered
const value1 = true;
const value2 = false;
console.log(value1 || value2);//true

//and(&&) stops as soon as falsy value is encountered=>if first value is falsy then it will not check for second
// let shortCircuitCheck = false;
let shortCircuitCheck = true;
let anotherAndValue = false;
console.log(shortCircuitCheck && anotherAndValue);//false

//Enhanced object litrals in ES6
const server = "Node";
const serverInfo = {
    ["google" + server]: "server-one",
    ["Meta" + server]: "server-two",
};
console.log(serverInfo);

//function shorthand
const person = {
    Name: "john",
    city: "delhi",
    info(){
        console.log(`my name is ${this.Name}`);
        console.log(`i am from ${this.city}`);
    },
};

//key short hand
const serverName = "bing";
const serverHost = "Microsoft";
//normal way
const serverInfo1 = {
    serverName: serverName,
    serverHost: serverHost,
};

//keyshort hand
const serverInfo2 = {
    serverName,
    serverInfo,
};
console.log(serverInfo, serverInfo1, serverInfo2);
