class car{
    
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    giveDesc(){
        console.log("Make: " + this.make + ", Model: " + this.model + ", Year: " + this.year);
    }
}

car1 = new car("whot", "nani", 2222);
car2 = new car("what", "nan", 2223);
car3 = new car("whet", "na", 2223);

let cars = [car1, car2, car3];

for(let i = 0; i < cars.length ; ++i ){
    cars[i].giveDesc();
}