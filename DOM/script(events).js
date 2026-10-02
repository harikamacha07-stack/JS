let b=document.getElementById("btn");
let t=document.getElementById("title");
b.addEventListener("click",() => {
    t.textContent="Welcome to JS Events!";
}
);
let b2=document.getElementById("btn2");
let c=document.getElementById("count");
let count=0;
b2.addEventListener("click", () => {
    count++;
    c.textContent=count;
});
let b3=document.getElementById("btn3");
let m=document.getElementById("message");
let n=document.getElementById("name");
b3.addEventListener
("click", () => { m.textContent="Hello " + n.value + "!"; });