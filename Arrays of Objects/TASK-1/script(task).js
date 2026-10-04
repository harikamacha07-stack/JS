let Products= [
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics"
    },
    {
        name: "Headphones",
        price: 199.99,
        category: "Electronics"
    }
];
for(let i=0; i<Products.length; i++) {
    console.log("Product Name: " + Products[i].name);
}
console.log("Second Product Price: " + Products[1].price);
console.log("Expensive Products:");
for(let i=0; i<Products.length; i++) {
    if(Products[i].price>1000) {
        console.log(Products[i].name);
    }
}
