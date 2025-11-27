async function getuser() {
    console.log("Fetching User Data....");
    const response = await fetch("https://jsonplaceholder.typicode.com/users") //here fetch used for fetching user data
    const data = await response.json(); // wait for data
    console.log("User data", data); //whene data is avaliable it will print in console.log
}

getuser()


const LoadtodosData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

LoadData();

const LoadUserData = async () =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("failed to load data",error)
    }
}

LoadUserData()