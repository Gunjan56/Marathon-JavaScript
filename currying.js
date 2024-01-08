//lets learn currying in javaScript
//currying is a advanced function in javaScript which is used for the
//manipulation of functions , arguments and parameters. carrying takes a function that recieves more 
//than one parameter and breaks it into series of unray(one parameter) functions. hence , the currying function takes only one parameter at a time
//Uses of Currying in JS
//Currying is helpful in event handling
//Example function(a,b) into f(a)(b)=> currying
//By using the currying function we can aviod passing the same variable many times.
//currying in js can be used to make a higher order function
//function currying by bind method
let multiply = function (x, y) {
  return x * y;
};

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));

let multiplyByThree = multiply.bind(this, 2);
console.log(multiplyByThree(5));

//function currying by closures
function multiplyy(x) {
  return function multiplyByTwo(y) {
    return x * y;
  };
}

let result = multiplyy(3);
console.log(result(3));

function f(a) {
  return function f(b) {
    return `${a} ${b}`;
  };
}

console.log(f(2)(3)); //currying

//Question 1 => sum(2)(6)(1)
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,6,1));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1)); //currying function

//Question => evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substruct")(4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}

let mul = evaluate("multiply");
let sum = evaluate("sum");
let divide = evaluate("divide");
let sub = evaluate("substract");
console.log(mul(2)(3));
console.log(sum(2)(3));
console.log(divide(2)(3));
console.log(sub(2)(3));

//Question => Infinite currying -> sum(1)(2)(3)...(n)
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(2)(4)(8)(1)(1)(1)(2)());

//question => Currying vs Partial Application
function sum2(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum2(10);
console.log(x(5, 10));
console.log(x(3, 2));

// or
console.log(sum2(20)(1, 4)); //it is a partial application

//now lets cover this by currying
function addValues(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(addValues(2)(3)(4));

//Question -> Currying in Dom Manipulation
// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }
// const updateHeader = updateElementText("curry");
// updateHeader("Hello javaScript Developers");

//Question ->  curry() implementation
//converts f(a,b,c) into f(a)(b)(c)
function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}
const sum3 = (a, b, c, d, e, f) => a + b + c + d + e + f;
const totalSum = curry(sum3);

console.log(totalSum(2)(2)(3)(4)(1)(3));
