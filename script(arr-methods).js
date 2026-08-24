let nums=[3,4,5,6,7];
console.log("original array:");
for(let i=0;i<nums.length;i++) {
console.log(nums[i]);
}
nums.push(8);
console.log("push method:");
for(let i=0;i<nums.length;i++) {
console.log(nums[i]);
}
nums.pop();
console.log("pop method:");
for(let i=0;i<nums.length;i++) {
console.log(nums[i]);
}
nums.unshift(2);
console.log("unshift method:");
for(let i=0;i<nums.length;i++) {
console.log(nums[i]);
}
nums.shift();
console.log("shift method:");
for(let i=0;i<nums.length;i++) {
console.log(nums[i]);
}