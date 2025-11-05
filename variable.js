// Var

var x = 10;
x = 20;        // allowed (reassignment)
var x = 30;    // allowed (redeclaration)


// Let

let y = 10;
y = 20;       // allowed (reassignment)
//let y = 30;   // SyntaxError: cannot redeclare in same scope

// using let variable if it is access before the declaration then it will give the ReferencesError

//console.log(b); // ReferenceError
let b = 2;

// Const
const a = 10
//a=20 // TypeError: assignment to constant variable

// const x; invalid
