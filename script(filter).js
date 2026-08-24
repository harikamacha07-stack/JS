 let nums=[5,7,3,5,9,0,4];
 console.log("original array: " + nums);
 let enums=nums.filter(function(n) {
    return n%2==0;
 });
 console.log("Even array: " + enums);


 let arr=[-5, 10, -2, 8, -1, 20];
 console.log("original array: " + arr);
 let parr=arr.filter(function(n) {
    if(n>=0)
        return n;
 })
 console.log("positive array: " + parr);