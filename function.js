// Function Declaration
function sum(a,b) {
    return(a+b)
}
console.log(sum(10,10))

// Function decalrtion using Variable 

const sum1 = function(a,b){
    return(a+b);
}
console.log(sum1(10,20))

// Return values

function hello(name) {
    return `Hello ${name}`
}
console.log(hello("Kevin"))

// without Return value
function hello(name) {
    console.log(`Hello${name}`) 
}
console.log(hello("Kevin")) // here it's display undefined

// Parameters and arguments
function multiply(x, y) { // here x, y is parameters
  return x * y;
}
console.log(multiply(4, 5)); //here  4 and 5 id arguments and output is 20

// Arrow function ()=>
const add = (a,b) => a+b;
console.log(add(10,50))


//Default parameters

function greet(name = 'Kevin') {
  return `Hello, ${name}`;
}
console.log(greet());       // Hello, Kevin
