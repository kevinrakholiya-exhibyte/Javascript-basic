let one: number = 21

//Array  

//Array with single Data type
let Marks: number[] = [10, 20, 30]
let students: string[] = ["Kevin", "John", "Parth"];
console.log(Marks)
console.log(students)


// With Multiple Datatype
let data: (number | string)[] = ["Kevin", "john", "Parth", 10, 20, 30]
console.log(data)

// Array of object
let users: { name: string, age: number }[] = [
    { name: "kevin", age: 21 },
    { name: "john", age: 22 }

]
console.log(users[0].name)
console.log(users[1].age)

type User = {
    readonly id: number,
    name: string
}

const userList: User[] = [
    { id: 1, name: "Kevin" },
    { id: 2, name: "john" }
]


// Object
let student: {
    name: string,
    age?: number,//optional field
    marks: number
} = {
    name: "Kevin",
    age: 22,
    marks: 80
}
console.log(student.marks)

// Real Life Example of array and object

type CartItem = {
    id: number,
    ProductName: string,
    price: number,
    quantity: number
}

const cart: CartItem[] = [
    { id: 1, ProductName: "Phone", price: 10000, quantity: 1 },
    { id: 2, ProductName: "T-Shirt", price: 500, quantity: 2 },
    { id: 3, ProductName: "Shoes", price: 1000, quantity: 1 }
]
