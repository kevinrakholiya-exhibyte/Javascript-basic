//Pure Function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));// 5
console.log(add(2, 3));// 5 same output for same input

//impure Function
let count = 0;

function increase() {
    count = count + 1;//modifies external variable
    return count;
}

increase();

//Real-Life Example of Pure Function
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 2));// 200
console.log(calculateTotal(100, 2));// 200


//Immutability

function addToCart(cart, item) {
    return [...cart, item];
}

const cart = ["Shirt"];
const newCart = addToCart(cart, "Shoes");

console.log(cart);// ["Shirt"]
console.log(newCart);// ["Shirt", "Shoes"]

// Save user old Data
const user = {
  name: "Kevin",
  email: "kevin@gmail.com",
  age: 21,
};

const updatedUser = {
  ...user,
  age: 22
};

