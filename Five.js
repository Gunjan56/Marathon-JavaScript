//part five of javascript
//some important array methods

//reverse,flat,every,find, findIndex,some,fill,sort, forEach
//reverse()=>reverse the order of array elements, reverse method overwrites the original array
const array = [10,20,30,40,50,60];
let reversedArr = array.reverse();
console.log(reversedArr);

//flat() => it is used to flatten a nested array or mostly used to flat 2d, 3d arrays and concatenate these values to form a new array
const array1 = [1,2,3,[3,4,[5,6,[7,8]]],8,90];
let flatArr = array1.flat(3);
console.log(flatArr);

//every method => every methos in javascript is used to check if all the elements in array pass the test
//it returns boolean if all elements pass the test otherwise false
const array2 = [1,3,2,5,6,7,40,50,60];
let everyMethod = array2.every((element, index, array) =>{
    return element > 5;
})
console.log(everyMethod);

//find() => used to find first element in array that satisfy the given condition
//if value is not found return undefined
const array3 = [1,4,6,8,78,14,0];
const findMethod = array3.find((element) => element>13);
console.log(findMethod);

//findIndex() = same as find method but in findIndex it return the index value of first element that satisfy the condition else return -1
const findIndex = array3.findIndex((element) => element > 6);
console.log(findIndex);

//some() => used to work on condition if condition is passed ther return true else return false
//it does not execute the function for empty array
const someMethod = array3.some((element, index,array) => element >76);
console.log(someMethod);

//fill()=> fills the array with specified value, fil method overwrites th original array
//start and end position can be given if not all elements will be filled, fill(value which want to add, start position, end position)
const fillMethod = array3.fill(13, 0, 1);
console.log(fillMethod);

//sort() => sort the element in an array, overwrites the original array, sort the elements as string in alphabetical and ascending order
const array4 = [2,1,3,5,6,4,8,9,5,10]; 
const sortMethod = array4.sort((a,b) => a-b);//ascending order
console.log(sortMethod);

const sortMethod2 = array4.sort((a,b) => b-a);//descending order
console.log(sortMethod2);

//forEach()=> it is not a loop forEach method is a call back function which iterate over each elements of array
//and execute the callback function it is not a loop but acts like a loop
const forEachMethod = array4.forEach(function(currentValue, index, array){
    console.log(currentValue+2);
});
console.log(forEachMethod);

//scheduling => setTimeout and setInterval
//we make decide to execute a function not right now but after some delay =>there are two method for this
//setTimeout => allow us to run a function once after the interval of time
//setInterval => allow us to run a function repeatedly starting after th interval of time and
// repeate continously at that interval of time
//setTimeout is built in javascript function that allow us to run a block of code once after a 
//specified delay in miliseconds
// let fullName = "John doe";
// setTimeout(function () {
//     console.log(`my name is ${fullName}`);
//     console.log(`How are you Today`);
//     console.log(`Where are you Form?`);
// }, 1000)
// //try in your console and see
// setTimeout(() => console.log("Good morning! "), 3000);
// setTimeout(() => console.log("Hello Guys!....."), 2000);
// setTimeout((name) => console.log(`${name} Are you Free Today`), 500, "Rohan");

// //cancelling with clearTimeout => setTimeout returns a times id which is used to cancle the setTimeout
// let timer = setTimeout(() => console.log("Hello world"), 5000);
// console.log(clearTimeout(timer));//this will stops the function from execution

// //setInterval => calls the function at specified intervals untill clearInterval is called or window is closed
// let FruitName = "Orange";
// const timer1 = setInterval(function(color) {
//     console.log(`my favorite fruit is ${FruitName}`);
//     console.log(`which is ${color} color`);
// },4000, "orange");

// // setInterval(() => console.log("Hello"), 2000);
// // setInterval(() => console.log("Bye Bye"), 3000);
// console.log(clearInterval(timer1));

// //parseInt, parseFloat, Number 
// //parseInt use to extract integer from string
// console.log(parseInt("123hello"));//123
// console.log(parseInt("23abc"));//23
// console.log(parseInt("abc123"));//NaN
// console.log(parseInt("123.23"));//123

// //parseFloat => use to get floating number , same as parseInt only diffrence is that it also returns decimal numbers
// console.log(parseFloat("123.450"));//123.450
// console.log(parseFloat("123abc.45"));//123
// console.log(parseFloat("123.345abc"));//123.345
// console.log(parseFloat("abc34.02"));//NaN

// //Number() convert string into valid Number
// console.log(Number("123"));//123
// console.log(Number("67.43"));//67.43
// console.log(Number("123abc"));//NaN
// console.log(Number(true));//1
// console.log(Number(false));//0

//WebStorage => local Storage and session Storage
//local storage => it can store data even after window is closed or reopened, data is stored inthe form 
//of key-value pair and can access data on dame domain 
// localStorage.setItem("name", "Rohan")//set storage
// localStorage.setItem("class", "B.Tech")
// localStorage.setItem("class", "BSC")//update value using key
// let fullName = "John";
// let City = "Baheri";
// localStorage.setItem(fullName, City)//use variables
// localStorage.getItem("name")//get item
// localStorage.removeItem("name")//remove item
// localStorage.clear()//remove all data from local storage

// localStorage.length;//length of local storage
// localStorage.key(0)//key of local storage

// //session storage => temporary data storage 
// //replace session with local in above code most of code works same
// sessionStorage.setItem("Name", "John");

// //cookies => Cookies are small piece of that that are sent from a website to  users web browser
// //when a user visites a browser
// //create a cookies
// document.cookie = "Name: John";
// document.cookie = "class: B.tech";
// document.cookie = "Name: Rohan"; //update cookie
// document.cookie = "Name = Rohan; expires= thur,02 nov 2023 12:00:00 UTC";//set expiry date 
// const cooki = document.cookie;
// console.log(cooki);//read cookie

//Important points to remember while doing js 
//Refactor code => improve code quality

//DRY => don't repeat yourself

