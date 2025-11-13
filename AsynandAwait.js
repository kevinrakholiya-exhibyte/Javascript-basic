async function getuser() {
    console.log("Fetching User Data....");
    const response =  await fetch("https://jsonplaceholder.typicode.com/users") //here fetch used for fetching user data
    const data = await response.json(); // wait for data
    console.log("User data",data); //whene data is avaliable it will print in console.log
}

getuser()