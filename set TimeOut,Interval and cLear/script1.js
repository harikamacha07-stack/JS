setTimeout(()=> {
    console.log("Hello World");},3000);
let c=0;
let intervalId = setInterval(()=> {
    c++;
    console.log(c);
    if(c==5) {
        clearInterval(intervalId);
    }
},1000);
let btn=document.getElementById("btn");
let h=document.getElementById("h");
setTimeout(()=> {
btn.addEventListener("click",()=> {
    h.textContent="Time Out!";
});
},2000);
