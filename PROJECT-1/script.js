let userdiv=document.getElementById("user");
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => {
        let p=document.createElement("p");
        p.textContent="UserName: "+user.name+" | Email: "+user.email;

        let b=document.createElement("button");
        b.textContent="Show Details";

        b.addEventListener("click", () => {
            let city=document.createElement("city");
            city.textContent="UserName: "+user.name+" | Email: "+user.email+" | city: "+user.address.city;
            userdiv.appendChild(city);
        } );
         userdiv.appendChild(p);
         userdiv.appendChild(b);
    });
});
