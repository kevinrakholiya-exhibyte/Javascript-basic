// before the introduce the optional chaining
if (obj && obj.user && obj.user.address && obj.user.address.city) {
    console.log(obj.user.address.city)
}

//after the ECMAScript 2020

const obj = {
    user: {
        address: "surat"
    }
}

console.log(obj?.user?.address?.city) // here it will give undefined


// Array  property access
const config = {
    items:
        [
            {
                name: 'kevin',
                city: "surat",
            },
            {
                name: 'parth',
                city: "surat",
            }

        ]
}

console.log(config?.items?.[0]?.name)
console.log(config?.items?.[1]?.name)
console.log(config?.items?.[2]?.name) // here it will give undefined




// Nullish Coalescing

let age = null;
console.log(age ?? 18); // here it will give 18


// Optional Chaining + Nullish Coalescing
let response = {};

let username = response?.user?.profile?.name ?? "Guest";
console.log(username);

// real time use case of Nullish Coalescing

let product = {
    details: {
        price: 0
    }
};

let price = product?.details?.price ?? "Not Available"; // here it will return 0
// let price = product?.details?.price || "Not Available"; here it will return Not Available 


console.log(price);
