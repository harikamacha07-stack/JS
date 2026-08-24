let nums=[2,3,5,6,7];
console.log("Original array: " + nums);
let sqnums=nums.map(function(n) {
    return n*n;
});
let addnums=nums.map(
    function(n) {
        return n+5;
    }
)
let name=["Hari","Ravi","Manu"];
let newname=name.map(
    function(n) {
        return "Hello" + " " + n;
    }
)
console.log("square array: " + sqnums);
console.log("Added array: " + addnums);
console.log("Updated names array: " + newname);
