//Search And Filter Product Using Pattern
const products = [
    { name: "Shirt", price: 500 },
    { name: "Sports Shoes", price: 1200 },
    { name: "Smart Watch", price: 2500 },
    { name: "Cap", price: 200 }
];

const search = 's';

const result = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .map(p => p.name.toLowerCase())


console.log(result)



//Extracting Only Required Fields

const users = [
    { id: 1, name: "Kevin", email: "Kevin@example.com", age: 22 },
    { id: 2, name: "Parth", email: "Parth@example.com", age: 25 },
];

const result1 = users.map(user => ({
    name: user.name,
    mail: user.email
}))

console.log(users)