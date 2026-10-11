async function getusers() {
    let c=1;
    let divuser=document.getElementById("user");
    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok)
            throw new Error("Unable to fetch users");
        let data=await response.json();
        data.forEach(user => {
            let p=document.createElement("p");
            p.textContent=c++ + ".UserName: " + user.name + " | Email: " + user.email;
            divuser.appendChild(p);
        });
    }
    catch(error) {
        divuser.textContent="Error: " + error.message;
    }
    finally {
        divuser.append("Fetching completed Successfully");
    }
}
getusers();