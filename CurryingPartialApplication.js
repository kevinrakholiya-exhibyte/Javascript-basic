//Currying
function add(x) {
    return function (y) {
        return x * y;
    };
}
const num = add(5)(3);
console.log(num);



function sendAutoMail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending Email to ${to} with subject ${subject} : ${body}`);

        }

    }

}


let dev1 = sendAutoMail("KevinRakholiya@gmail.com")
let dev2 = dev1("About Order Confirmation")

dev2("Hey Kevin,Your Order Is Placed successfully")


//Partial Application
function partial(fn, a) {
    return function (b) {
        return fn(a, b);
    }
}

function multiply(a, b) {
    return a * b;
}

const multiplyBy2 = partial(multiply, 2);

console.log(multiplyBy2(5));// 10
console.log(multiplyBy2(10));// 20
console.log(multiplyBy2(20));// 40
