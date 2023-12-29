// polyfill in js => basically it is a piece of code
//that enables the usage of new programing language or web plateforms features in outdated browsersor enviornments that do not support them.
//polyfills are an essential component of web development since not all browsers and enviornments immediately support the newest features, it can be difficult for developers to stay up to date with these changes
//lets see an example of using polyfill
//bind() built in method implement this bind() method from scratch
//see bind() was added in ecmaScript6 but earliar browsers like internet explorer 11 do not support it
let name1 = {
  firstName: "John",
  lastName: "Doe",
};
document.body.style.background =
  "linear-gradient(90deg, #bd79f1, #00cbff, #69e684)";
const printName = function (hometowm, state, Country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      "," +
      hometowm +
      "," +
      state +
      "," +
      Country
  );
};
let printMyName = printName.bind(name1, "Noida");
printMyName("U.P", "India"); //built-in bind method

Function.prototype.mybind = function (...args) {
  let obj = this;
  console.log(obj);
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let printMyName2 = printName.mybind(name1, "Noida");
printMyName2("U.P", "India"); //our own inplementation of bind method
