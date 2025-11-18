fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("Users:", data);
    })
    .catch(error => console.log("Error:", error));

// handling Response using if else

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Network response was not ok")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error While fetching the error", error))

// Using async/await with Fetch API

async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (response.ok) {
            const data = await response.json()
            console.log(data)
        } else {
            throw new Error("Failed to fetch Data")
        }

    }catch(error){
        console.error('Error',error)
    }
}

getUserData()


// POST api Request for add new user
let newUser = {
  name: "Kevin",
  email: "kevin@example.com"
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
})
  .then(res => res.json())
  .then(data => console.log("POST Response:", data))
  .catch(err => console.log(err));

  // PUT api request for update user data

  let updatedUser = {
  name: "Kevin Rakholiya",
  email: "kevinrakholiya1234@example.com"
};

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updatedUser)
})
  .then(res => res.json())
  .then(data => console.log("PUT Response:", data))
  .catch(err => console.log(err));


  // DELETE api request for delete user data

  fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE"
})
  .then(res => console.log("DELETE Response:", res.status))
  .catch(err => console.log(err));
    