let b = document.getElementById("btn");
let t=document.getElementById("title");
b.addEventListener("click", () => {
    t.classList.add("highlight");
});
let b2 = document.getElementById("btn2");
b2.addEventListener("click", () => {
    t.classList.remove("highlight");
});
let b3 = document.getElementById("btn3");
b3.addEventListener("click", () => {
    t.classList.toggle("dark");
});