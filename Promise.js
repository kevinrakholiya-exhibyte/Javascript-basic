function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        // checking the userId is valid or not

        setTimeout(() => {
            if (userId > 0) {
                resolve({id:userId,name:"Kevin",role:"Developer"})
            }else{
                reject("Please Enter the valid userId")
            }
        }, 2000)

    })
}

fetchUser(10).then(user => {
    console.log(user)
})
.catch(err => {
    console.log("Failed")
})
