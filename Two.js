//continue with part two of javascript

//functions in javascript
//function is a block of code that can we executed again and again when needed
//function => reuseabel block of code

//function declaration and function expression
//function declaration
function greet(){
    console.log("function declaration are the function who have name");
    console.log('also known as named function');
}
greet()//call function, execute function, invoke function, run function

//function expression
let userGreet = function(){
    console.log("function are stored in variable as value");
}
userGreet();

//Anonymous function same as function expression
const nextGreet = function(){
    console.log("function expression are function without name");
    console.log('function expression produce some value which are stored in variable');
}
nextGreet();

//arrow function
//arrow function are shorter way to write function and it is also es6 means modern way to write function
const message = () => console.log("Good Morning!");//single line
message();
const messageTwo = () => {
    console.log("Good Afternoon!");//multiline
}
messageTwo();

//function parameter and arguments
// value that is declared inside function definition or inside braces called => parameter
//value that is passed while function execution is called => arguments
function addTwo(a,b){//parameter
    console.log(a+b);
}
addTwo(2,3);//argument passed

//return keyword in function
//return is the final output of a function
//in function we can return anything
//code after return in function is called as unreachable code

let addThree = function(a,b,c){
    return a+b+c;
}
console.log(addThree(2,3,4));

//function inside another function
//we can call a function inside another function
const multiNum = (num) => num*2;

function addNum(a,b){
    let num1 = multiNum(a);
    let num2 = multiNum(b);
    return `values are ${num1} ${num2}`
}
console.log(addNum(2,3));

//Array
//array => allow you to store collection of values, including other array or objects in a sinngle variable
//values in array are called elements
//array indexding start from 0
//array litral and array constructor syntax
//array litral
const arr = [1,2,3,4,5,5];
console.log(arr);
//access array element
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//array length
console.log(arr.length);//6
//last element of array
console.log(arr.length-1);

//index that is not in raqnge of array is undefined
console.log(arr[6]);//undefined

//add new value in array or update value
arr[6] = 10;
console.log(arr);

//array constructor
const secondArr = new Array("HTML", "CSS", "Javascript");
console.log(secondArr);

//two dimensional array - one array inside another array
const thirdArr = [1,2,3,[2,3,4], [5,6]];
console.log(thirdArr);

//change value of array element
secondArr[0] = "Python";
console.log(secondArr);

// array with const keyword => it is good practice to always declare array with const keyword
//const keyword is allow javascript array to modify thier values.
const myArr = [1,2,3,4];
//myArr = [1,2,5,5]//error
myArr[0] = 5;//no error
console.log(myArr);

//loop an array forward
let newArr = [6,7,8,9,10,12];
for(let i = 0; i<newArr.length; i++){{
    console.log(newArr[i]);
}}
//loop backward
for(let i =newArr.length-1; i>=0; i--){
    console.log(newArr[i]);
}

//common array methods
newArr.push(30);//add new element at end off array
newArr.pop();//remove last element
newArr.shift()//remove first element
newArr.unshift()//add new element at start
newArr.concat(1,2,3,5)//add items to the end of array=> also can add two array

//Object => In javascript an object is a collection of key value pair
const obj = {
    firstName: "john",
    lastName: "Doe",
    City:"Delhi",
};
console.log(obj);//firstName is a key and John is a value
//accessing values
console.log(obj.firstName);//using dotnotation(.)
console.log(obj['lastName']);//using squareBrackets

//modifying properties in object
obj.fullName = obj.firstName+obj.lastName;
obj["country"] = "India";//add new property to object
console.log(obj.country);

//method // function// behaviour in object
//an function as a value of key in object is called method
//They can be accessed and called in the same way as object properties
const myObj = {
    start: function(storage){
        console.log(`server is starting on ${storage} GB storage`);
    }
};
console.log(myObj.start(200));

//this keyword
//inside an object this refers to current object
//with differents function calls this behave depending on current object or function
const user = {
    Name: "John",
    City: "Mumbai",
    Age: 24,
    details: function(){
        console.log(`my name is ${this.Name} and live in ${this.City}, I am ${this.Age} years old.`);
    },
};
console.log(user.details());

//string and string methods
const str = "Hello";
let anotherStr = "world!";
console.log(str + " " + anotherStr);
console.log(str.length);
console.log(str.split(" "));//divide string
console.log(str.concat(anotherStr));//add strings
console.log(str.slice(2, 2));//create new string
console.log(str[0]);//array like method
console.log(str===anotherStr);
console.log(str.length-1);
console.log(str.indexOf("o"));//true false
console.log(str.includes("r"));//index of substring

//Math object
//Math is a built in object for mathmatics operation
console.log(Math.floor(3));
console.log(Math.round(23));
console.log(Math.max(arr));
console.log(Math.min(arr));
console.log(Math.PI);
console.log(Math.E);
//math.random => generates random number from 0(include) to 1(exclude)
console.log(Math.random());
console.log(Math.floor(Math.random() *10)); // 0 to 10
console.log(Math.floor(Math.random() *10) +1); //1 to 10

//generate four digit random number
function randomNumber(){
    return Math.floor(Math.random() * 10);
}
console.log(`four digit number: ${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`);

//date object =. date is a built in object for date operation
//create a date
let todayate = new Date();
console.log(todayate);//retrun todays date
console.log(todayate.toDateString()); //return date as string value

let newDate = new Date("25 dec 2023 16:14:02");
console.log(newDate);

//SET DATE
todayate.setDate(23);
console.log(todayate);
//month are 0 based like array(jan=0, feb=1,march=2, ...)
//days are also 0 index based like(sun = 0, mon = 1, ...)
//javascript date are started from 1970
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getTime());
console.log(new Date().getFullYear());

//advance loop topics
//for of loop
//it lets you loop over iterable data structure like array, string, maps.
const forLoopArr = [1,2,3,5,2,7, "Javascript", "Python"];
for(let i of forLoopArr){
    console.log(i);
}

//for in loop => it lets you loop over mainly objects
let myObject = {
    greet: "Hello",
    person:"John",
    age: 23,
    favColor: "Red",
}
for(let a in myObject){
    console.log(`${a}:${myObject[a]}`);
}

//some object methods
const newObject = {
    firstName: "rohan",
    lastName:"Kumar",
    city:"Pune",
    age: 19,
}
const array = [10,13,45,65,23,14];
//Object.keys=> return an array of key in given object
console.log(Object.keys(myObject));//return array keys
console.log(Object.keys(array));//return index values

//Object.values => return array of object values
console.log(Object.values(myObject));//return values
console.log(Object.values(array));//return actual array

//Object.entries => return an array of [key,value]

console.log(Object.entries(newObject));//array like object property
console.log(Object.entries(array));//array with index value

//get index in for or loop=> loop with index number
for(let [i,j] of Object.entries(array)){
    console.log(i,j);
}
//see you in next chapter
//happy coding 😀