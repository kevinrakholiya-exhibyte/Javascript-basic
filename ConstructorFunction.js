// old way of creating objects in JavaScript

function Car(brand, color) {
  this.brand = brand; // this keyword used refers to object
  this.color = color;
}

Car.prototype.start = function() { 
  console.log(`${this.brand} car started!`);
};

let car1 = new Car("Honda", "Red"); // here car keyword used for creating new object
car1.start(); 
