// polyfill for map filter and reduce methods
//map()
const array = [1, 2, 4, 5, 6, 7, 8, 3];
// const ModifiedArr = array.map((num, i, arr) => {
//   return num * 2;
// });
// console.log(ModifiedArr);

//filter()
// const filterArr = array.filter((num, i, arr) => {
//   return num % 2 === 0;
// });
// console.log(filterArr);

//Reduce()
// const reducedArr = array.reduce((accu, curr, i, arr) => {
//   return accu + curr;
// }, 0);
// console.log(reducedArr);

//polyfill of map()
Array.prototype.myMap = function (callback) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};
const myPolyfillMap = array.myMap((num, i, arr) => {
  return num * 2;
});
console.log(myPolyfillMap);

//polyfill for filter()
Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const myOwnFilterPolyfill = array.myFilter((num, i, arr) => {
  return num % 2 === 0;
});
console.log(myOwnFilterPolyfill);

//polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accum = initialValue;
  for (let i = 0; i < this.length; i++) {
    accum = accum ? callback(accum, this[i], i, this) : this[i];
  }
  return accum;
};
const myOwnReduceMethod = array.myReduce((accu, curr, i, arr) => {
  return accu + curr;
}, 0);
console.log(myOwnReduceMethod);

//map Vs forEach
const arr = [20, 30, 40, 45, 65, 45, 32, 13];
let mapResult = arr.map((cb) => {
  return cb + 2;
});
let forEachResult = arr.forEach((cb) => {
  return cb + 2;
});
console.log(mapResult, forEachResult); //so map return the modified array but forEach doesnot return anything it returns undefined
