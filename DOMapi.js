// some use case of DOM API.

//Updating Content Dynamically
document.querySelector(".price").textContent = "₹899";

// Creat or Remove Elements Dynamically
let msg = document.createElement("div");
msg.textContent = "New notification!";
document.body.appendChild(msg); // here appendChild used to add child node to it's parent node

// Apply the loader using CSS and DOM
document.getElementById("loader").style.width = "80%";

// Popups, and Dialogs using DOM API
document.querySelector(".popup").classList.add("show"); // classList adds a class to an element.

// Live Data Dashboards
setInterval(() => {
    document.querySelector("#btcPrice").textContent = "₹51,20,000";
}, 1000);

