// arrays method

// pop method
const arr1 = ["Saab", "Volvo", "BMW"];
arr1.push("audi")
console.log(arr1)

//pop method 
const arr2 = ["Saab", "Volvo", "BMW"];
arr1.pop("BMW")
console.log(arr2)

//map()
const arr3 = [1,2,3]
const sum = arr3.map(arr3*2)
console.log(arr3)

const arr4 =["Saab", "Volvo", "BMW"];
const uppercase = arr4.map(upper => upper.toUpperCase())
console.log(uppercase)

//filter
const student = [
    {
        name: "jhon",
        marks: 30,
        age: 24
    },
    {
        name: "Bob",
        marks: 40,
        age: 20
    },
    {
        name: "Another",
        marks: 30,
        age: 21
    },

    {
        name: "Robert",
        marks: 32,
        age: 25
    },
    {
        name: "Alice",
        marks: 45,
        age: 22
    },
]

const result = student.filter((students)=>{
   return students.marks > 30
})

console.log(result)


// find method
const arr5 = [10,20,30,40,50]

const result1 = arr5.find(num => num > 30)
console.log(result1) // it will stop at 40 

// spread operator

//Copying Arrays (to avoid modifying original data)
const product = ["T-shrit","Shoes","Watch"]
const copiedData = [...product]
copiedData.push("Phone")
console.log(copiedData)

// rest parameter

//Object Destructuring using Rest (Extracting remaining properties)
const user = {
  name: "kevin",
  age: 20,
  city: "surat",
  email: "abc@example.com"
};

const{name,age,...rest} = user;

console.log(name) // it will display only name
console.log(rest); // it will display rest of the data 

 
