//OOps => object oriented programming
//js class is based on objects which contain data and class is used to manipulate that data in a structured way
//four priciples of OOPs
//Abstraction,polymorphism, Encapsulation, Inheritance
//class & object => class is a blueprint or template that defines the structure of objects
//it describes the methods and properties that objects created from class will have.
//An object is an instance of class
//How to create class and objects
//in JavaScript there are three ways to create class
//1.Using constructor function
//2.Using ES6 classes
//3.Using Object.create()

//using constructor function
function MyFirstClass(firstName, LastName){//class constructor function name always starts with first capital letter
    this.firstName = firstName;//defining properties using this to point current object
    this.LastName = LastName;
    this.info = function(){
        console.log(`hello my name is ${firstName}`);
    };
}
const fullName = new MyFirstClass("John", "doe");//constructor function calls the constructor class and creates the new object
console.log(fullName);
console.log(fullName.info());//accessing class methods 

//object properties=> now fullName is an object so we can access its properties
console.log(fullName.firstName);
console.log(fullName.LastName);

//__proto__ => is a property in javascript that allow us to make a prototype of that object
console.log(MyFirstClass.prototype);
console.log(MyFirstClass.__proto__);
console.log(MyFirstClass.__proto__.__proto__.__proto__);

//create class using class keyword or ES6
class Person{// start name with first letter capitalize
    constructor(name, age, city, education){//constructor method using constructor keyword is automatically called when create a new instance of class
        this.name = name;//pass parameters to constructor for set the intial properties for object
        this.age = age;
        this.city = city;
        this.education = education;
    }

    info(){
        console.log(`my name is ${this.name}`);
        console.log(`I am ${this.age} years old and i am from ${this.city}`);
        console.log(`I am ${this.education} Graduate`);
    }
    Hobbies(...hobby){
        console.log(`my hobbies are ${hobby}`);
    }
}
const personInfo = new Person("John", 24, "Noida", "B.Tech");
console.log(personInfo.info());
console.log(personInfo.Hobbies("Watching movies", "Reading Books", "Cooking"));
console.log(personInfo instanceof Person);

//create class using Object.create =>
const PersonInfo = {
   greet(){
    console.log("Heelo JavaScript");
    },
    firstPersonInfo(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
}
const person1 = Object.create(PersonInfo);
console.log(person1.greet());
(person1.firstPersonInfo("John", "doe"));
console.log(person1);

//Inheritance or class inheritance
//it is a fundamental concept of javascript that allow to acquire the properties and behaviours of other objects
//we have parent vihicle => child class cycle, motorcycle, car those all can inherite the properties from parent class

//extend keyword in class=> it is used to establish inheritance between classes
//it allows inherit properties and methods from parent class

//super method => super method refers to parent class, we call super method in constructor method means we call the parents constructor method and get acess to the parents properties and methods
//inheritance example
class Server{
    constructor(serverRequest){
        this.serverName = "Firebase";
        this.serverLocation = "India";
        this.serverMemory = "100GB";
        this.serverRequest = serverRequest;
        
    }
}
class CallServer extends Server{
    constructor(ln, dv, serverRequest) {
        super(serverRequest);
        this.yourLocation = ln;
        this.device = dv;        
    }
}
const newRequest = new CallServer("India", "Chrome", 10);
console.log(newRequest);

//using super.method()
//class with only methods => if there is no properties in your class there is no need to 
//use constructor function , simply don’t write constructor function
class Personn{
    intro(){
        console.log("Hello my name is John");
        console.log('I am a software engineer');
    }
}
class Person1 extends Personn{
    greet(){
        console.log("Hello everyone");
        super.intro()//super.method
    }  
}
const personinfo = new Person1();
console.log(personinfo.greet());


//Arrow function have no super.method

//prototypal inheritance and prototypal chain
//javascript objects can inherit properties and methods from others=> it is based on the concept of protptypes
//where each object has an internal link to another objects called its prototype
function Person12(name){
    this.name = name;
}
Person12.prototype.greet = function(){
    console.log(`hello my name is ${this.name}`);
}
const perso = new Person12("John");
console.log(perso.greet());

//prototypal chain => In js the null value is the end of the prototypal chain
//__proto__.__proto__.__proto__=> it looks for property and method of objects untill it finds null
console.log(Person.__proto__);

//inheritance chain => you can extend the inheritance chain as much as you want, setting parent, grndparent, greatgrand parent
//classes and so on
class GrandParent{
    constructor(){
        this.fullName = "John";
    }
}
class Parent extends GrandParent{
    constructor(){
        super();
    }
}
class Child extends GrandParent{
    constructor(){
        super();
    }
}
const family = new Child();
console.log(family);

//method overriding => you can override a method by redefining it in a class or object

//static method => it belongs to the class rather than an instance of that class, static class methods
//are defined on the class itself you can't call an static method on an object, it is accessible only on an object class
class Student{
    constructor(fn, cn){
        this.fn = fn;
        this.cn = cn;
    }
    static intro(fn ,cn){
        console.log(`my name is ${fn}`);
        console.log(`i am student of class ${cn}`);
    }
}
const info = new Student("john", "doe");
//console.log(info.intro());//error static method can't be accessible

//getter and setter => getter and setter methods is used to define bojects properties with custom behaviour

//getter method => is used to retrive the value of a property, defined using the get keyword

//setter method => is used to set the value of property, defined using the set keyword

class Employee{
    constructor(name, age, phoneNo){
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    get fullInfo(){
        return `Employee Name: ${this.name}\n Employee age: ${this.age} \n Employee phoneNo: ${this.phoneNo}`;
    }
    /**
     * @param {any} add
     */
    set employeeAddress(add){
        return this.EmployeeAddress = add;
    }

}
const employee1 = new Employee("John", 34, 9076854212);
console.log(employee1.fullInfo);//getter is used as property so don't use ();
employee1.employeeAddress = "delhi";
console.log(employee1);//we set a new property for Employee class


