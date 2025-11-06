// check if number is positive,negative,zero

let num = 0;

if (num > 0){
    console.log("Positive");   
} else if (num < 0 ){
    console.log("Negative")
} else {
    console.log("Zero")
}

// check if person is teenger or not

let num1= 13

if (num1 >=13 && num1 <=19) {
    console.log("teenger")
}else{
    console.log("is not teenger")
}

// Find the largest among three numbers

let a = 10
let b = 20
let c = 30

if(a > b && a> c){
    console.log("a is largest number")
} else if (b > a && b > c){
    console.log("b is largets number")
} else {
    console.log("c is the largest number")
}

// Check if a given character is uppercase, lowercase, or not a letter

let char = 'a'

if(char >= 'A' && char <= 'Z'){
    console.log("Uppercase letter")
} else if (char >= 'a' && char <= 'z'){
    console.log("Lowercase Letter")
} else {
    console.log("not a letter")
}

// check if number is positive,negative,zero using ternary operator

let n = 0

let result = (n > 0) ? "Positive" : (n < 0) ? "Negative" : "Zero";
console.log(n)

// switch case

// Using switch with Numbers
let num3 = 90

switch (true) {
    case (num3 >= 90):
        console.log("A Grade");
        break;
    case (num3 >= 80):
        console.log("B Grade");
        break;
    case (num3 >= 70):
        console.log("C Grade");
        break;
    case (num3 >= 70):
        console.log("D Grade");
        break;
    default:
        console.log("Pass")
        break;
}

console.log(num3)


