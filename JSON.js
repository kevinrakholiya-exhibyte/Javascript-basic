// JSON.stringfy
const user = {
    name:"Kevin",
    age:20,
    city:"Surat"
}
const jsontext = JSON.stringify(user)
console.log(jsontext) // outpust :{"name":"Kevin","age":20,"city":"Surat"}

// JSON.stringfy
const jsontext1 = '{"name":"Kevin","age":20,"city":"Surat"}'
const user1 = JSON.parse(jsontext1)
console.log(user1.name) // output : Kevin
console.log(user1.age) // output : 20


