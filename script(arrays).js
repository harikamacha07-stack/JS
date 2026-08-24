let n=Number(prompt("Enter no. of subjects: "));
let sub=[];
console.log("Enter your fav subjects: ");
for(let i=0;i<n;i++) {
    sub[i]=prompt("Enter sub: ");
    console.log(sub[i]);
}
let nums=[1,2,3,4,5];
let s=0;
console.log("Array Elements: ");
for(let i=0;i<nums.length;i++) {
    console.log(nums[i]);
    s+=nums[i];
}
console.log("Sum: " + s);
let max=0;
for(let i=0;i<nums.length;i++) {
    if(max<=nums[i])
        max=nums[i];
}
console.log("Maximum Number: " + max);
