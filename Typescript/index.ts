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

type User1 = {
    readonly id: number,
    name: string
}

const userList: User1[] = [
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


//Interface and Generics 

interface User {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

interface ApiResponse<T> {
    success: boolean,
    data: T,
    message?: string
}


async function getUser(): Promise<ApiResponse<User>> {
    return {
        success: true,
        data: {
            id: 101,
            name: "Kevin",
            email: "Kevin@gmail.com",
            isActive: true
        }
    }
}

async function ShowUser() {
    const response = await getUser()
    if (response.success) {
        console.log("User Data", response.data)
    } else {
        console.log("Error While Fetching Data")
    }
}

ShowUser()


interface PaymentService {
    pay(amount: number): void;
}

class RazorpayService implements PaymentService {
    pay(amount: number): void {
        console.log("Paid using Razorpay:", amount);
    }
}

class StripeService implements PaymentService {
    pay(amount: number): void {
        console.log("Paid using Stripe:", amount);
    }
}

function executePayment(service: PaymentService, amount: number) {
    service.pay(amount);
}

executePayment(new RazorpayService(), 500);
