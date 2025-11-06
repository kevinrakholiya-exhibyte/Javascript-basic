// for loop

// print the even number between the 1 to 20
for(let i=1 ; i<=20 ; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// Print the multiplication table of 5

let num = 5

for(let i=1 ; i<=10 ; i++){
    console.log(`5 x ${i} =` +num * i);
}

// while Loops

//Print numbers from 1 to 10 using while loop
let i = 1
while (i <= 10) {
    console.log(i)
    i++;
}

// print odd number between  1 to 15 using the while loop
let n = 1
while (n <= 15) {
    if(n % 2 === 1){
        console.log(n)
    }
    n++
}

// do...while loop

//Print the sum of numbers from 1 to 10 using do..while loop

let n1 = 1
let sum = 0

do{
    sum+= n1
    n1++;
}while(n1 <= 10)

// for...of loop

// print all element in an array

const arr = [1,2,3,4,5]

for (const val of arr){
    console.log(val)
}

// print all character in string

const str = "Hello"
for (const val of str){
    console.log(val)
}

// for...in loop


// Print all keys of an object

const user = {
    name:"Kevin",
    age:21,
    city:"Surat"
}

for(const key in user){
    console.log(key)
}

// Print properties with the key name

const user1 = {
    name:"Kevin",
    age:21,
    city:"Surat"
}

for(const key in user1){
    console.log(`${key}:${user1[key]}`)
}

// skip 

const students = ["Rahul", "Aarav", "Kevin", "Priya", "Neha"];

for (let name of students) {
  if (name === "Kevin") {
    console.log("Kevin found");
    break; // stop searching
  }
  console.log("Checking:", name);
}

// break

const students1 = [
  { name: "Kevin", submitted: true },
  { name: "Aarav", submitted: false },
  { name: "Priya", submitted: true },
  { name: "Neha", submitted: false }
];

for (let student of students1) {
  if (!student.submitted) {
    continue; // skip those who didn’t submit
  }
  console.log(`${student.name} has submitted the homework.`);
}



