let username=document.getElementById("Username");
let form=document.querySelector("form");
let message=document.getElementById("message");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(username.value==="") {
        message.textContent="Enter your name";
    }
    else {
        message.textContent="Hello, " + username.value + "!";
    }
});
