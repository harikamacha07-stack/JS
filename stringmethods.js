let name = "JavaScript";
console.log("Length of String: " + name.length);
console.log("Uppercase: " + name.toUpperCase());
console.log("Lowercase: " + name.toLowerCase());
console.log("First char: " + name.charAt(0));
console.log("Last char: " + name.charAt(name.length-1));
let sentence = "JavaScript is a programming language.";
console.log("includes 'programming': " + sentence.includes("programming"));
console.log("includes 'Python': " + sentence.includes("Python"));
//
let Name=prompt("Enter your name: ");
console.log("Name: " + Name);
console.log("Length of Name: " + Name.length);
console.log("First char of Name: " + Name.charAt(0));
//
let word=prompt("Enter a word: ");
let n=word.length;
let f=1;
for(let i=0;i<n;i++) {
    if(word.charAt(i)!=word.charAt(n-1-i)) {
        f=0;
        break;
    }
}
if(f==1) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}