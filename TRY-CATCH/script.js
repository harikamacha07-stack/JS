async function getUsers() {
let c=1;
let divuser=document.getElementById("user");
try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok)
        throw new Error("Unable to fetch users");
    let data=await response.json();
    data.forEach(user => {
        let p=document.createElement("p");
        p.textContent=c++ + ". UserNAme: " + user.name + " | Email: " + user.email;
        divuser.appendChild(p);
    } );
}
catch(error) {
    divuser.textContent="Error: " + error.message;
    console.log("Error: " + error.message);
}
}
getUsers();
