let n=1;
do {
    console.log(n);
    n++;
} while (n<=5);
let c;
do {
    c=Number(prompt("Enter a number: "));
} while(c<=0);
console.log("Positive number entered!");

let a=4;
let b=7;
let op;
do {
 op=Number(prompt(
        "1. Add\n" +
        "2. Subtract\n" +
        "3. Multiply\n" +
        "4. Exit"));
}while(op!=4);
switch(op) {
    case 1: console.log(a+b);
    break;
    case 2: console.log(a-b);
    break;
    case 3: console.log(a*b);
    break;
    case 4: console.log("Exit!");
    break;
    default: console.log("Invalid Entry!");
}
