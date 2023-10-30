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

