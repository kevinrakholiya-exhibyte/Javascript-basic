//Map Method 
const userRoles = new Map();

userRoles.set('admin', 'alice');
userRoles.set('User', 'Bob');
userRoles.set('emp', 'john');
userRoles.set({}, 'guest');//Use an object as a key

console.log(userRoles.get('admin'));//Output: alice
console.log(userRoles.get('User'));//Output: Bob
console.log(userRoles.has('emp'));//Output:true
console.log(userRoles.delete('emp'));//it will delete the emp name key 
console.log(userRoles.size);//Output: 3

//Use Map to store same key name with different values

//with object
const obj = {};
obj["1"] = "string key";
obj[1] = "number key";

//with obejct it will be overwrite


//using map
const newMap = new Map()

newMap.set("1", 'string key')
newMap.set(1, 'number key')


console.log(newMap.get("1"))//output : string key
console.log(newMap.get(1))//output : number key


//set Method

//real life use case of Set method 
//to remove duplicate element from the array
const number = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8]
const setNumber = new Set(number)

const uniqueNumbers = [...setNumber]//it will only contain unique nummbers
console.log(uniqueNumbers)

//other way to store unique value
const uniqueNumbers1 = new Set();

uniqueNumbers1.add(1);
uniqueNumbers1.add(2);
uniqueNumbers1.add(2);//Duplicate, ignored
uniqueNumbers1.add(3);

console.log(uniqueNumbers1);//Output: Set(3) { 1, 2, 3 }
console.log(uniqueNumbers1.has(2));//Output: true


//same as in string to store unqiue users
const Users = new Set()
Users.add("Kevin")
Users.add("John")
Users.add("Kevin")

console.log(Users);//it only show kevin and John 
console.log(Users.size);//output : 2

