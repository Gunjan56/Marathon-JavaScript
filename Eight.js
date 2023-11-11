//Encapsulation => it is the concept of public and private object properties of javascript
//all objects properties and methods are public by defualt
//it is the concept of bundling data and method that operate on that data into a single unit, known as an object
//it aims to hide the internal state and implementation details of an object
//in js we use # start of name to declare a private property
class WeatherApp{
    #apiKey
    constructor(winter, raining, sunny){
        this.winter = winter;
        this.raining = raining;
        this.sunny = sunny;
        this.#apiKey = "34bgt531E23R";
        

    }
    todayWeather(){
        console.log(`today is ${this.raining}`);
        console.log(`today is ${this.sunny} day`);
        console.log(`today is ${this.winter} day`);
        console.log(`weather api key is ${this.#apiKey}`);
    }

}
let weatherInfo = new WeatherApp("Winter", "raining", "Sunny")
console.log(weatherInfo.todayWeather());

//Abstraction => concept of hiding implementation details and exposing only essential s features and functionality
//of an object and module, allow us to work with higher level concepts
//class should only represents imformation that is relevent to the problem's context which means information which is relevent to the problem should reprents and others can be hide
class ServerLogic{
    #serverApiKey
    constructor(){
        this.#serverApiKey = "345678";
        this.#serverApiKey;
    }
    serverLogic(){
        console.log('logic of server');
        console.log('server is started');
    }
}
class Server extends ServerLogic{
    constructor(){
        super();
        this.serverName = "firebase";
        
    }
    start(){
        console.log('server is starting');
    }
}
const request1 = new Server();
console.log(request1.serverLogic());

//polymorphism => means many forms achived by inheritance and methodf over riding
class Animal{
    constructor(animalName){
        this.animalName = animalName;
    }
    animalSound(){
        console.log(`${this.animalName} is making sound`);
    }
}
class Dog extends Animal{
    constructor(animalName){
        super(animalName);
    }
    animalSound(){
        console.log(`${this.animalName} is making sound woof woof`);
    }
}
class Cat extends Animal{
    constructor(animalName){
        super(animalName);
    }
    animalSound(){
        console.log(`${this.animalName} is making sound meow meow`);
    }
}
const dog = new Dog("doggie");
const cat = new Cat("cattie");
console.log(dog.animalSound());
console.log(cat.animalSound());

/**
 * end of OOPs Happy Coding 😊
 */