// Define a traditional function to calculate the square of a number
function squareNumber(num) {
    return num * num;
}

// Define an arrow function to calculate the cube of a number
const cube = (num) => {
    return num * num * num;
}

// Create an array of numbers and use `.map()` to apply both functions to the array
let nums = [1, 2, 3, 4, 5];

const squared = nums.map(num => squareNumber(num));
console.log(squared);

const cubed = nums.map(num => cube(num));
console.log(cubed);