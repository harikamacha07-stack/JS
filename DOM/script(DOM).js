let heading=document.getElementById("title");
heading.textContent="Hello, Website!";
let para=document.getElementById("message");
para.textContent="New Message: DOM Manipulation is fun!";
let t=document.getElementById("title2");
let b=document.getElementById("btn");
b.addEventListener("click",() => {
    t.textContent="Button Clicked!";
});