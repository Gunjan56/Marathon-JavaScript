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
