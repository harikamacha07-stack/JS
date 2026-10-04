let username = document.getElementById("username");
let email=document.getElementById("email");
let form=document.getElementById("form");
let message=document.getElementById("message");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(username.value==="") {
        message.textContent="Enter your name";
    }
    else if(email.value==="") {
        message.textContent="Enter your email";
    }
    else {
        message.textContent="Hello, " + username.value + "! Your email is " + email.value;
    }
});