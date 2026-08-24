let a=Number(prompt("Enter a: "));
let b=Number(prompt("Enter b: "));
let m=Number(prompt("ENter Marks: "))
console.log("Addition: " + add(a,b));
console.log("Subtraction: " + sub(a,b));
console.log("Multiplication: " + mul(a,b));
console.log("Division: " + div(a,b));
console.log("Nature: "+iseven(a));
console.log("Largest: " + Larg(a,b));
console.log(grd(m));
function add(x,y) {
    return x+y;
}
function sub(x,y) {
    return x-y;
}
function mul(x,y) {
    return x*y;
}
function div(x,y) {
    return x/y;
}
function iseven(x) {
    return x%2==0;
}
function Larg(x,y) {
    if(a>b)
        return x;
    return y;
}
function grd(m) {
    if(m<0 || m>100)
        console.log("Invalid marks!");
    if(m>90) 
        console.log("Grade: A+");
    else if(m>80) 
        console.log("Grade: A");
    else if(m>70) 
        console.log("Grade: B+");
    else if(m>60) 
        console.log("Grade: B");
    else if(m>50) 
        console.log("Grade: c+");
    else if(m>40) 
        console.log("Grade: C");
    else
        console.log("Grade: FAil");
}