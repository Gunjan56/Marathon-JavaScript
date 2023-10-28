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

