// simple example in Encapsulation 
// protect user password using private method

class User{
    #password // to define the prive Fields use "#" just before the field name
    constructor(name,password) {
        this.name = name
        this.#password = password
    }

    updatePassword(newPass) {
    if (newPass.length >= 6) {
      this.#password = newPass;
      console.log("Password updated successfully");
    } else {
      console.log("Password must be at least 6 characters");
    }
  } 
}

const user1= new User("Kevin", "123456")
console.log(user1.name)
console.log(user1.password) //it show undefined because password is private filed
