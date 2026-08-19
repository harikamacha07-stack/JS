let a=Number(prompt("Enter any number: "));
if(a%2==0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

let b=Number(prompt("Enter any number: "));
if(b>0) {
    console.log("Positive");
}
else if(b<0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

let m=Number(prompt("Enter marks: "));
if(m<0 || m>100) {
    console.log("Invalid range of marks!")
}
else {
if(m>90) {
    console.log("A+");
}
else if(m>=80 && m<90) {
        console.log("A");
}
else if(m>=70 && m<80) {
        console.log("B");
}
else if(m>=60 && m<70) {
        console.log("C");
    }
else {
        console.log("F");
}
}