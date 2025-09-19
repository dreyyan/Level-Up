
function calculateSquare(num){
    return num * num;
}

const calculateCube = (num) => {
    return num * num * num;
}

let numbers = [1, 2, 3, 4];

let squared = numbers.map(num => calculateSquare(num));
console.log(squared);

let cubed = numbers.map(num => calculateCube(num));
console.log(cubed);
