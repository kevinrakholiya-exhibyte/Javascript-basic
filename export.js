
export const PI = 3.1416;
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}


// real life use case

// cart file 


let cart = [];

export function addToCart(item) {
  cart.push(item);
}

export function getCart() {
  return cart;
}

export default function clearCart() {
  cart = [];
}


    