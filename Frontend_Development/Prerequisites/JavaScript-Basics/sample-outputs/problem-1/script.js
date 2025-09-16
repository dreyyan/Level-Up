// Declare variables
var favoriteSport = "Football"; // String
let luckyNumber = 6; // Number
const IS_ENROLLED = true; // Boolean

var nums = [1, 2, 3, 4, 5]; // Array
let data = { // Object
    name: "Adam",
    age: 20,
    isStudent: true
}

// Log variables to the console
console.log(`Favorite Sport: ${favoriteSport}`);
console.log(`Lucky Number: ${luckyNumber}`);
console.log(`Enrolled: ${IS_ENROLLED}`);
console.log(`Numbers: ${nums}`);
console.log(`Data: ${data}`);

// Reassign values to demonstrate difference between variables
{ let favoriteSport = "Soccer"; }
luckyNumber = 10;
// IS_ENROLLED = false; // ERROR

console.log(`Favorite Sport: ${favoriteSport}`);
console.log(`Lucky Number: ${luckyNumber}`);