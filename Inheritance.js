// simple example if Inheritance 
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

const myCar = new Car();
myCar.start();  // inherited from Vehicle
myCar.drive();  // own method

// real time use case 
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    login() {
        console.log(this.name + "login sucessfully")
    }
}

// here customer class is child of User Class it means customer extends method of User class
class customer extends User {

    constructor(name, email) {
        super(name, email);   // super keyword used to call method of constructor from its parent
    }

    addToCart(item) {
        console.log(`${this.name} added ${item} to cart`);

    }
}

const c1 = new customer("kevin", "kevin123@gmail.com")
const c2 = new customer("om", "omlathiya@gmail.com")

c1.login()
c1.addToCart("Pizza")
c2.login()
c2.addToCart("Burger")


// simple example of using "Super Keyword"

class Parent {
    hello() {
        return "Hello from Parent!";
    }
}

class Child extends Parent {
    hello() {
        return super.hello() + " And hello from Child!";
    }
}

