let email=document.getElementById("email");
let password=document.getElementById("password");
let form=document.getElementById("form");
let message=document.getElementById("message");
form.addEventListener("submit",(event)=> {
    event.preventDefault();
    if(email.value==="") {
        message.textContent="Enter your email";
    }
    else if(password.value==="") {
        message.textContent="Enter your password";
    }   
    else if(!email.value.includes("@")) {
        message.textContent="Enter a valid email";
    }
    else if(password.value.length<8) {
        message.textContent="Password must be at least 8 characters long";
    }
    else {
        message.textContent="Login successful!";
    }
});