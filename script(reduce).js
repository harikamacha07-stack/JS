let nums=[12, 45, 7, 89, 23];
console.log("Array: " + nums);
let s=nums.reduce(function(total,n) {
    return total+n;
},0);
console.log("Sum: "+s);
let p=nums.reduce(function(pro,n) {
    return pro*n;
},1);
console.log("Product: "+p);
let m=nums.reduce(function(max,n){
    if(n>max)
         max=n;
    return max;
},0);
console.log("Maximun Element: "+m);