// real time use of composition  
function trimText(text) {
    return text.trim();
}

function toLower(text) {
    return text.toLowerCase();
}

function RemoveSymbols(text) {
    return text.replace(/[^\w\s@.]/g, "");
}


function compose(fn1, fn2, fn3) {
    return function (value) {
        const step1 = fn1(value);
        const step2 = fn2(step1);
        const step3 = fn3(step2);
        return step3;
    }
}
const cleanInput = compose(trimText, toLower, RemoveSymbols);
console.log(cleanInput("      !!! hello World  ####"))


// Use composition for Cart Billing
function getSubTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

function addGST(amount) {
    return amount + amount * 0.18
}

function applyDiscount(amount) {
    return amount - 40;//fixed Discount
}

function applyDeliveryCharge(amount) {
    return amount + 30;//fixed Charge
}


function compose(...functions) {
    return function (value) {
        return functions.reduce((acc, fn) => fn(acc), value);
    };
}


const FinalBill = compose(getSubTotal, addGST, applyDiscount, applyDeliveryCharge);

const cart = [
    { price: 200, quantity: 2 },
    { price: 100, quantity: 3 }
]

console.log(FinalBill(cart))
