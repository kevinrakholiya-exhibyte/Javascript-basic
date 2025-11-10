// object syntax 

// const objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3
// };

// object with mulriple datatype
const car = {
    brand:"BMW",
    price:100000,
    color:["red","white","blue"], // array as a value
    owner:{name:"kevin",city:"Surat"} // object as a value
}

// accessing the properties of an object
console.log(car.brand);
console.log(car.owner.name);
console.log(car.color[0])

console.log(car["price"]) 

// object destructuring
const person = {
  name: "Kevin",
  age: 20,
  city: "surat"
};

const { name, age, city } = person;

console.log(name); // Kevin
console.log(age);  // 20
console.log(city); // surat

// object methods

const person1 = { name: "Kevin", age: 22 };
console.log(Object.keys(person1));   // ["name", "age"]
console.log(Object.values(person1)); // ["Kevin", 22]
console.log(Object.entries(person1)) // [ [ 'name', 'Kevin' ], [ 'age', 22 ] ]

// Nested Object
const student = {
  name: "Kevin",
  age: 20,
  address: {
    city: "surat",
    state: "Gujrat",
    country: "India"
  }
};

console.log(student.address.city) // surat
console.log(student["address"]["state"]); // gujrat


// this keyword
const person2 = {
  name: "Kevin",
  age: 20,
  hello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.hello(); // Output: Hello, my name is Kevin
