//polyfill for call apply and bind methods
//call()

// const name = {
//   name: "Gunjan",
//   subject: "JavaScript",
// };

// const name1 = {
//   name: "John",
//   subject: "Python",
// };

// function LearningJSCall(country) {
//   return `My name is ${this.name} and i am learning ${this.subject}, I am from ${country}`;
// }

// const callMethod = LearningJSCall.call(name, "India");
// const callMethod1 = LearningJSCall.call(name1, "India");
// console.log(callMethod);
// console.log(callMethod1);

//apply()
// function learningJSApply(country) {
//   return `My name is ${this.name} and i am learning ${this.subject}, I am from ${country}`;
// }
// const applyMethod = learningJSApply.apply(name, ["India"]);
// const applyMethod1 = learningJSApply.apply(name1, ["India"]);
// console.log(applyMethod);
// console.log(applyMethod1);

//bind()
// function learningJSBind(country) {
//   return `My name is ${this.name} and i am learning ${this.subject}, I am from ${country}`;
// }
// const bindMethod = learningJSBind.bind(name);
// const bindMethod1 = learningJSBind.bind(name1);
// console.log(bindMethod("India"));
// console.log(bindMethod1("India"));

//NOw lets make our own call apply and bind methods
let user = {
  userName: "Gunjan",
  userMessage: "Hello Js Developers",
};

function greet(country) {
  console.log(
    `${this.userMessage}, My name is ${this.userName}, I am from ${country}`
  );
}
// console.log(greet.call(user, new Date().toLocaleTimeString(), "India"));
Function.prototype.myCall = function (obj = {}, ...args) {
  //   console.log(this);
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }
  //   console.log(user);
  obj.func = this;
  obj.func(...args);
};
greet.myCall(user, "India");
// console.log(myOwnCallMethod);

//polyfill for apply
Function.prototype.myApply = function (con = {}, ...args) {
  //   console.log(this);
  if (typeof this !== "function") {
    throw new Error("it is not callable");
  }
  con.fn = this;
  con.fn(...args);
};

greet.myApply(user, "India");

//polyfill for bind
Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
  //   if (typeof this !== "function") {
  //     throw new Error("It is not callable");
  //   }
  //   con.fn = this;
  //   con.fn(...args);
};
const functionBind = greet.myBind(user);
functionBind("India");
