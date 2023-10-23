"use strict";
//World's most interesting and most Hated language
//Welcome to the Confusing World of Javascript
//Javascript is a highlevel, client-side, object-oriented language
//Javascript makes your webpage dynamic, easily interactive
//Javascript is a sripting programing language

//Why learn javascript
//javascript is an high demanding language
//used in for both front and backend development
//on trend language 

//Javascript ES6 or others Updates
//ECMA is a javascript organisation which updates the features of Javascript
//ES6 is the most important version of javascript

//Let's started with JS
//Basics of JavaScript
//comments in javascript
//single line comment - //

//multiline comment
/*i am a 
multiline 
comment*/

//Types of js - means how we can add js into HTML file or see our code is working or not 
//three types of adding js 
//internal js
//write your js within <script> </script> tag.
//<script></script>
//External JS
//Make a seperate .js file and add with script tag into your html file before </body> tag.
//<script src="script.js"></script>

//console.log
//It is commenly used for debugging and testing
//we can directly run our js code in console.
console.log("Hello");

//Running Javascript
//Console, Browser, Node

//single '' vs double ""quote and template litral
//All are used to represent string in javascript
console.log("Hello Javascript");
console.log('Hello Javascript');
console.log(`Hello javaScript`);

//Rules to define variables in javascript
//variable name must be start with letter, _ or $ sign. they can't start with number
//variable names are case sensitive in js like - myVariable and myvariable both are case sensitive
//Variable names can be declared with var, let and const keyword.
//while declaring variable it is good practice to use camelCase notation ex - use firstName instead of first_name
//it is good practice to declaring all variables name at starting of your function or block of code

//variable declaration and initialize
let declareVariable; // declare
var initializeVariable = 10; //initialize
initializeVariable = 20; //assignment or assign

//scope of variables
//Global scope, local scope, function scope, block scope

//var let and const
var globalVariable = "var have global scope and functional scope and can be redeclare or reassign";

let blockFunctionalScope = 'let does not have global scope but have block and functional scope and can be reassign';
const uniqueVariableName = `const doesn't have scope but functional and block scope and can't be reassign,
also const must be initialize before use`;

//prefer camelCase
let myName = "John";
let yourName = "Doe";

//Now let's learn about data types
//Primitive datatype => stack - 7
let num = 1; //Number
let bolean = true;//Boolean
let str = "string"; //String
let a1; // undefined=> variable declare but not intialize
let a2 = null; //value is empty but later there will be value;
let a3 = 10000n; //bigint numbers with more than 15+ digits;
let a4 = Symbol('a10'); //it will be unique for either same value or different;

//non primitive data type - heap - 3
let arr = []; //array
let obj = {}; //object
let dte = new Date(); //date

//Another use of template Litral
let myVar = 10;
console.log(`we can use variables inside template litral ${myName}`);
console.log(`With the help of template litral 
we can also write
multiline text`);

//operators in javascript
//arithmetic operators
console.log(2+2); //addition
console.log(3-1);//substraction
console.log(4/2);//division
console.log(4*2);//multiplication
console.log(16%4); //modulus
console.log(2**2); //exponencial

//assignment operator
let a = 10//assign value to a variable

//comparison operator
let num1 = 23;
let num2 = 12;
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//an number is onley equal to itself if
console.log(1 === 1); //true
console.log(1 > 1); //false
console.log(1 < 1);//false

//logical operator
console.log(12 > 6 && 20 > 4); //logical AND
console.log(12 < 6 || 20 < 4); //logical OR
console.log(!(4===4)); //logical NOT

//ternary operator - conditional operator
let condition = 12 > 5 ? "true" : "false"
console.log(condition);

//typeof and instanceof operator
console.log(typeof 50); //type of number
console.log(typeof "num");//type of string

//== and === equal to
console.log("== checks only for value");
console.log("=== checks value and data type also");

//type conversion
//changing data type from one type into another of a variable
//example => String into Number

//using javascript in-buit function 
console.log(typeof Number("10"));//number
console.log(typeof String(true));//string
console.log(typeof Boolean(1));//true

//post and pre operator
let c = 10;
console.log(c++);//post increment
console.log(++c); //pre increment
console.log(c--); //post decrement
console.log(--c); //pre decrement

//coercion
console.log(typeof (1 + "1"));
console.log(typeof (1 - "1"));
console.log(typeof (1 * "1"));
console.log(typeof (1 / "1"));
console.log(typeof (1 * "hello"));//NaN

//true and false values => false values are 0 "" undefined null NaN
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false
console.log(Boolean(undefined));//false
console.log(Boolean(""));//false

//in built-in functions alert, Prompt, confirm
//We can store following response in variables
// alert("This is alert");
// prompt('Enter your input');
// confirm('confirm yes of no');

//strict mode
//executes javascript code in strict mode, use "use strict" at the top of script

//control flow
//if else
//used to control flow of the program based on condition
if(12>6){
    console.log("this code of block will be executed");
}else{
    console.log("This code of block will be executed");
}

//if else if ladder
if(14<20){
    console.log("This code of block will be executed");
}else if(14 === 14){
    console.log("This code of block will be executed");
}
else if(14>9){
    console.log('This code of block will be executed');
}

//switch => Provides a simpler way to write multiple if-else statements which test for same conditon
let count = 10;
switch(count){
    case 5: 
        console.log("count is 5");
        break;
    case 4:
        console.log("count is 4");
        break;
    case 7:
        console.log("Count is 7");
        break;
    case 11:
        console.log("count is 11");
        break;
    default:
        console.log("invalid value");
        break;
}

//local and global variable => visibility of a variable
//global => variable declare outside of any function or block of code called global variable, it is also can be accessed
//from anywhere within js program
//local variable => variable declared inside a function of block of code called local variable
let gloVariable = 10;//global variable
function localVariable(){
    let a = 10;//local variable
}

//loops in javascript
//loops are used to execute a block of code repeatedly untill a specific condition is met
//for loop => going from one point to another
for(let i = 1; i<=5; i++){
    console.log("for loop", i);
}

//do while loop => do while loop at least once and then check for condition
let counter = 1;
do{
    console.log("executes at least onece");
    counter++;
}while(counter <= 2)

//while loop => works on given condition
let i = 1
while(i<=5){
    console.log("this message will be log");
    i++
}

// types of errors in javascript
//syntax error, logical error, runtime error, network error, type error

//break and continue
//break => break will throw you outside of loop and stop execution of loop
for(let i = 1; i <=5; i++){
    if(i===4){
        break;
    }
    console.log(i);
}//output=>1,2,3

for(let i = 1; i<=2; i++){
    if(i===3){
        continue;
    }
    console.log(i);
}//output=>1,2





