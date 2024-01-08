//Memoization in Js =>
// Memoization is an technique that can be used to reduce time consuming
//calculations by saving previous input to something called cache and returning the result from it
//suppose we have written code and want to access the result from that code and now we want to
//access that result again and again so for resucing the time consume we used to store that result 
//into something called cache and then if when we need that result we just access that result from our cache and no need to execute the code again for the same result
let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("memory");
      let result = fun(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};

let efficient = memoize(calc);
console.time();
console.log(efficient(5)); //memory
console.timeEnd();
console.time();
console.log(efficient(5)); //cache
console.timeEnd();

//lets see another example or Function memoization
function multiplyBy2() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("cache");
      return cache[num];
    } else {
      cache[num] = num * 2;
      console.log("memory");
      return cache[num];
    }
  };
}
const memoization = multiplyBy2();
console.time();
console.log(memoization(5));
console.timeEnd();
console.time();
console.log(memoization(5));
console.timeEnd();

const memoizati = function () {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("cache data");
      return cache[num];
    } else {
      cache[num] = num + 2;
      console.log("Memory");
      return cache[num];
    }
  };
};
const memo = memoizati();
console.log(memo(5));
console.log(memo(5));
