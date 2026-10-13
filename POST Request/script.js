async function createusers() {
    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/users",
            {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name:"Hari",
                    email:"abc@gmail.com",
                    city:"HYD"
                })
            }
        );

        if(!response.ok) {
            throw new Error("Failed to create user");
        }
        let data=await response.json();
        console.log(data);
    }
        catch(error) {
            console.log("Error: " + error.message);
        }
    }
createusers();