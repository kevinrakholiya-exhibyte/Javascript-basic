// implicit Conversion
let numberVar = 10;
let stringVar = "20";

let result = numberVar + stringVar;

console.log(result); // for this output should be 1020

// explicit Conversion

//Converting to String

String(value) // expalicit way to convert into string

String(123)        // "123"
String(null)       // "null"
String(undefined)  // "undefined"
String(true)       // "true"
`${5 + 3}`         // "8"     implicit way
123 + ""           // "123"   implicit way


// Converting to Number

Number(value) 

Number("42")    // 42
+"42"           // 42  (unary plus)
Number("")      // 0
Number(" ")     // 0
Number(null)    // 0
Number(undefined) // NaN
Number("3.14")  // 3.14


// Converting to Boolean

Boolean(value)

Boolean(0)        // false
Boolean("")       // false
Boolean("0")      // true
Boolean([])       // true
!!{}              // true

