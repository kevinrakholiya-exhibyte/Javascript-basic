// Promise.all()
function getUserData() {
    return Promise.resolve({ name: "Kevin", id: 101 });
}

function getOrders() {
    return Promise.resolve(["Order1", "Order2"]);
}

function getNotifications() {
    return Promise.reject("Notifications failed");
}

Promise.all([getUserData(), getOrders(), getNotifications()])
    .then(([user, orders, notifications]) => {
        console.log("data loaded successfully.");
        console.log({ user, orders, notifications });
    })
    .catch(err => {
        console.log("failed to load Data:", err);
    });

// Promise.allSettled()
function getUser() {
    return Promise.resolve({ name: "Kevin", id: 101 });
}

function getOrders1() {
    return Promise.resolve(["Order1", "Order2"]);
}

function getNotifications1() {
    return Promise.reject("Notifications failed ❌");
}

Promise.allSettled([getUser(), getOrders1(), getNotifications1()])
    .then(results => {
        console.log("Dashboard partially loaded 😇");

        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Task ${index + 1}: Success`, result.value);
            } else {
                console.log(`Task ${index + 1}: Failed`, result.reason);
            }
        });
    });


