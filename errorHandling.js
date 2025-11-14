try {
    let json = '{"name":"Kevin","age":20,"city":"Surat","email":"kevinrakhpliya@gmail.com"}'
    let user = JSON.parse(json)
    // this if condition check the user email is found or not 
    if (!user.email) {
        throw new SyntaxError("Field 'email' not found in JSON.");
    }
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("SyntaxError Error Caught: " + error.message);
    } else {
        console.log("An unexpected error occurred: " + error.message);
    }
}

// function to check valid email

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email address!");
    }
    return "Valid email address!";
}

try {
    console.log(validateEmail("kevinrakholiya"));
} catch (error) {
    console.log("Error Caught:" + error.message);
}

