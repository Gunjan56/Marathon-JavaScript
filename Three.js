"use strict";
//part three of JavaScript
//array destructuring => method to extract values from array and objects and store them into variables

//array destructuring
const array = [10,20,30,50,40];

let [a1,a2,a3,a4,a5] = array;//destructuring
console.log(a1,a2,a3,a4,a5);

let arr = ["javaScript", "Python", "PHP", "HTML"];
let [l1,,,l4] = arr;//escape values
console.log(l1,l4);

const myArr = ['PHP', "React", 20,50, true];
let [x1,x2,x3,x4,x5=false] = myArr;//default values
console.log(x1,x2,x3,x4,x5);

//object destructuring
const obj = {
    Name: "xyz",
    city: "delhi",
    language: "Hindi"
}
let {Name, city, language} = obj;//same variable with same property name
console.log(Name, city, language);

const myObj = {
    firstName:"xyz",
    LastName:"pqr",
    age:20,

}
let {firstName:a, LastName:b, age:c, color:d="Red"} = myObj;//with variable names and default values
console.log(a,b,c,d);

//spread and rest operator
//unpack values of array and objects
//(right hand side of =)
//denoted by three dot ...
let array1 = [10,20,20,30,50];
console.log(...array1);

//copy array
console.log([...array1]);//copy array

//spread on string
let str = "Message";
console.log(...str);

let array2 = ["Java", "c#", '.NET'];
let result = [10,22,40,...array1, ...array2];//add all values and gives a new array
console.log(result);

//spread in function => input in array then use spread to send it as 
//separate in function as parameters
function addTfour(a,b,c,d){
    return a+b+c+d;
}
const res = [1,2,4,3];
console.log(addTfour(...res));

//spread in object
const obj1 = {
    server:"chrome",
    port: 400,
    ip:"Invalid",
}
//objects are not iterable so use {} to use spread operator in objects 
//beacuse directly using spread in objects will not work
console.log({...obj1, dot:true});

//rest operator=> capture remaining values of an array or object
let arr1 = [10,20,90,22,13];
let arr2 = [2,3,12,56,78,9];
const [p,q,...ending] = arr1;//left hand side rest operator
console.log(p, q, ending);

//spread and rest together
let [p1,p2,...remaining] = [...arr1, ...arr2];//left hand side rest, right hand side spread operator
console.log(p1,p2, remaining);

//rest parameter => when spread operator used as parameter in function called as rest parameter
function add(...num){
    let total = 0;
    for(let i of num){
        total += i;
    }
    return total;
}
console.log(add(3,4));

//rest in object
const obj3 = {
    port: 400,
    region:"unknown",
    area:null,
}
let {...area} = obj3;
console.log(area);

//Sets => In javaScript a set is a collection of unique values
const mySet = new Set([10,30,10,20,20,40,20,10,60,70, "JavaScript", true, null, {class:"12th"}]);//set is a array like object so we cann't access thier values using index value
console.log(mySet);//return Set with unique values
console.log([...mySet]);//return array with unique values spread converts set into array

// sets methods
let newSet = new Set([]);
newSet.add(1);
newSet.add(20);
newSet.add(11);//adding values
console.log(newSet);
console.log(newSet.size);//size is the number of elements in set
console.log(newSet.has(20)); //return boolean check elements present in set or not
console.log(newSet.delete(1));//delete specific values from set and return boolean
console.log(newSet);
console.log(newSet.clear());//deletes all

//Set is also are object so we can use loop
for(let i of mySet){
    console.log(i);
}

//WeakSets => only contains objects
const weakestSet = new WeakSet([]);
let d1 = {
    city: "Mumbai",
};
let d2 = {
    country: "India",
};
let d3 = {
    village: "xyz",
};
weakestSet.add(d1);
weakestSet.add(d2);
weakestSet.add(d3);
console.log(weakestSet);

//Map => collection of unique key value pairs where key can be of any data type
const myMap = new Map([
    ["Name", "xyz"],
    [true, "Url"],
    ["city", "India"],
    [true, 100]
])
console.log(myMap);
//some map methods
myMap.set(true, 200);
myMap.get("city");
myMap.delete("city");
myMap.clear();
console.log(myMap);
console.log(myMap.size);

//javaScript Hoisting=> moving declaration of a variable or functions at the top of script
//using function before defining it is possible because of javascript hoisting
console.log(greet());//working fine
function greet(){
    return "Hello Javascript";
}
//hoisting different behaviour with var let and const
console.log(g);//undefined with var
//console.log(g1);//can not access g1 before initialization
//console.log(g2);//can not access g1 before initialization
var g = 10;
let g1 = 20;
const g2 = 10;
//function declaration are also move to the top => which means you can use function before 
//they are declare but this only works with function declaration
//function expression are not hoisted
// userGreet()// reference error
// let userGreet = function(){
//     console.log("Hello");
// }

//reference Vs value
//value => all primitive values like number string booleans arr stroed in memory directly and have a fixed size
//all primitive values get a copy of data which means changes into them will not directly affects the original data
let x = 10;
let y = x;//y is now a copy of x
y = 20;//value of y doesnot affect the value of x
console.log(x,y);//x =10, y = 20

//reference => all non primitive data type that is object are reference which means they get a copy
//any changes made to the new variabel affects the original
let ar1 = [1,2,3,4];
let ar2 = ar1;//ar2 is now reference of ar1
ar2.push(12);
console.log(ar1);//changes directly affects the original 
console.log(ar2);

//javaScript best practices
/*
1.declaration on top
2.initialize variables when you declare them
3.eclare arrays and objects with const keyword
4.don't use new Object() like use "" instead of new String(), use 0 instead of Number(), use
{} instead of new Object(), use [] instead od new Array(), use (){} instead of new function
5.beware of automatic type conversion
6. use === for comparison 
7.use parameter defaults
8.end your switches and defaults
*/

//see you in next chapter
//happy coding!










