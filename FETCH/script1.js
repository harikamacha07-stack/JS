let userdiv=document.getElementById("user");
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    let c=1;
    data.forEach(user => {
        let p=document.createElement("p");
        p.textContent=c + " . User Name: "+user.name+" | User Email: "+user.email;
        userdiv.appendChild(p);
        c=c+1;
    });
});