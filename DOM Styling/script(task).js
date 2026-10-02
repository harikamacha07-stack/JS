let title=document.getElementById("title");
let button=document.getElementById("btn");
button.addEventListener("click",() => {
    title.style.color="blue";
    title.style.fontSize="40px";
});
let button2=document.getElementById("btn2");
let para=document.getElementById("para");
button2.addEventListener("click",() => {
    para.style.backgroundColor="yellow";
    para.style.color="red";
});
let button3=document.getElementById("btn3");
let t=document.getElementById("title2");
button3.addEventListener("click", () => {
    t.style.color="blue";
    t.style.backgroundColor="lightgreen";
    t.style.fontSize="40px";
    t.style.textAlign="center";
});