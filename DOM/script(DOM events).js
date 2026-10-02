let name=document.getElementById("name");
let output=document.getElementById("output");
name.addEventListener("input", () => {
    output.textContent="You typed: " + name.value;
} );
let t=document.getElementById("title");
t.addEventListener("mouseover", () => {
    t.textContent="Mouse Over Event Triggered! ";
} );
let m=document.getElementById("message");
let b=document.getElementById("btn");
b.addEventListener("click", () => {
    m.textContent="You Clicked the Button!";
} );