// ----------------------------- Arithmetic Operators-----------------------------------

let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(++a);   // 11

// ----------------------------- Assignment Operators -----------------------------
let x = 10;
x += 5; // x = x + 5       x = 15
x *= 2; // x = x * 2       x = 30

// ----------------------------- Comparison Operators -----------------------------

5 == '5' //true   it's only check the value of operand 
5 === '5' // False it's check vlaue or type of operand

// ----------------------------- Logical Operators -----------------------------

// Logical OR (||)
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let z = 9;

if (z < 10 || z > 18) {
  alert( 'The office is closed.' );
}

// Logical And (&&)
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// Ternary Operators

// condition ? If True : If False
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes
