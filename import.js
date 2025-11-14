import { PI, add, subtract } from './math.js';
import clearCart, { addToCart, getCart } from './cart.js';
import { getItem } from './menu.js';


console.log(PI);
console.log(add(5, 3));
console.log(subtract(5, 3));


const item = getItem("Coffee");
addToCart(item);

console.log(getCart());
clearCart();
