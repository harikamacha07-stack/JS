let nums=[2,4,5,6,7];
let t=Number(prompt("Enter element to be check: "));
let found=false;
let m=0;
for(let i=0;i<nums.length;i++) {
    if(nums[i]==t) {
    found=true;
    m=i+1;
        break;
    }
}
if(found)
     console.log("Element found at position " + " m.");
else 
    console.log("Element not found!");


let c=0;
for(let i=0;i<nums.length;i++) {
    if(nums[i]%2==0)
        c++;
}
console.log("Number of even numbers: " + c);


let min=100;
for(let i=0;i<nums.length;i++) {
    if(nums[i]<=min)
        min=nums[i];
}
console.log("Minimum Element: " + min);