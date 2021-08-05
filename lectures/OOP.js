class Car {
    constructor(numDoors, maxSpeed, nameOfCar, maxPeople, carColor, coolnessNum = 1000) { // Equivalent to "__init__" in Python/"public ClassName()" in Java
        this.doors = numDoors; // "this" is equivalent to "self" in Python - refers to an INSTANCE of a Car; think of "this" is being replaced with the variable name we use to hold a specific Car we make
        this.topSpeed = maxSpeed;
        this.model = nameOfCar;
        this.occupancy = maxPeople;
        this.color = carColor;
        this.coolFactor = coolnessNum;
    }

    // Define methods that belong to the car class here.
    repaintCar(newColor) { // No "function" word needed here
        this.color = newColor;
    }

    // Method that retrieves the model name for this car
    getModel() {
        return this.model;
    }
}

// Creating two instances of Cars
var myCar = new Car(4, 160, "Chevrolet Corvette", 4, "red", 10000);
var myCar2 = new Car(2, 210, "Studebaker Golden Hawk", 2, "gold");

console.log("Color before:");
console.log(myCar.color);
myCar.repaintCar("black");
console.log("Color after:");
console.log(myCar.color);
console.log(myCar.getModel());
console.log(myCar.model);