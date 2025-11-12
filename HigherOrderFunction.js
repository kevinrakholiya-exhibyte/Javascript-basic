function callbackFunction(){
    console.log("this is callback function")
}

function higerOrdergfunction(func) {
    console.log("this is higherorder funcion")
}

higerOrdergfunction(callbackFunction)


// use case of higerOrder function and callbackFunction
const raduis = [1,2,3]

// logic to calculate area 
const area = function(raduis) {
  return Math.PI * raduis * raduis
}

// logic to calculate diameter
const diameter = function (raduis) {
    return 2 * raduis  
}

// resuable function to calculate area or diameter

const calculate = function (raduis,logic) {
    const output = []
    for (let i = 0; i < raduis.length; i++) {
        output.push(logic(raduis[i]))
    }
    return output
}

console.log(calculate(raduis,area)) // hrer area is a callback function because area pass as an argument to calculate function
console.log(calculate(raduis,diameter)) // same as here diameter is callback function and calculate is higher order function


// callback function
setTimeout(() => {
  console.log("Task done after 2 seconds");
}, 2000);
// here setTimeout is main function arrow function is the callback function