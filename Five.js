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

//some() => 