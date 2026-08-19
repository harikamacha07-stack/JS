let n=1;
while(n<=10) {
    console.log(n);
    n++;
}
let m=10;
while(m>0) {
    console.log(m);
    m--;
}
let num=Number(prompt("Enter a number: "));
let s=0;
while(num>0) {
    s+=n;
    num--;
}
let a=Number(prompt("Enter a +ve number: "));
while(a<0) {
    a=Number(prompt("Wrong. ENter +ve Number. "));
}
console.log("Positive number entered.");