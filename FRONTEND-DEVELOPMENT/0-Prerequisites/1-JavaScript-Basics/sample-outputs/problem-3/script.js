// Define an object representing a car /w properties
let car1 = {
    make: "Honda",
    model: "Civic",
    year: 2025,

    description: function() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
let car2 = {
    make: "Toyota",
    model: "Corolla",
    year: 2024,

    description: function() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
let car3 = {
    make: "Ford",
    model: "Mustang",
    year: 2025,

    description: function() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// Create an array of Car objects
let cars = [car1, car2, car3];

// Use a loop to call the description method for each car and logs the results
for (let car of cars) {
    car.description();
}