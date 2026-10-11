let userdiv=document.getElementById("user");
let c=1;

async function getusers() {
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    let data=await response.json();
    data.forEach(user => {
        userdiv.innerHTML+=("\n"+c++ + "." + "UserName: " + user.name + "  |  Email: " + user.email + "<br>");
        
});
}
getusers();