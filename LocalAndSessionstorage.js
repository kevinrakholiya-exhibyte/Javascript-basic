// storing user data using Localstorage
const User = {
    name: "Kevin",
    age: 20,
    city: "Surat"
}
localStorage.setItem("UserData", JSON.stringify(User)); // to store object in local storage use JSON.stringify
console.log(JSON.parse(localStorage.getItem("UserData"))) // to access data from local storage use JSON.parse


// real time use case of Localstorage 

// Storing & Getting User Login Token
localStorage.setItem("token", "abc123xyz")

let UserToken = localStorage.getItem("token")
console.log(UserToken)


//Saving Cart Items in E-Commerce

let cart = JSON.parse(localStorage.getItem("cart")) || []
function addTocart(product) {

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart))

}

addTocart({ id: 1, name: "T-shirt", price: 499 })


// session Storage 

// Temporary Login Message using session


if (!sessionStorage.getItem("welcome")) {
    alert("Welcome to our site!");
    sessionStorage.setItem("welcome", "true");
}

// to prevent double time submitting form 

if (sessionStorage.getItem("isSubmitting")) {
    alert("Form already submitting...");
} else {
    sessionStorage.setItem("isSubmitting", "true");
    console.log("Submitting form...");

    // simulate success
    setTimeout(() => {
        sessionStorage.removeItem("isSubmitting");
    }, 3000);
}


