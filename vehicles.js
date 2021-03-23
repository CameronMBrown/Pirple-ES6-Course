//Pirple Assignment 9 - Classes

class Vehicle {
  constructor(make, model, year, weight){
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.needsMaintenance = false;
    this.tripsSinceMaintenance = 0;
  }

  repair(){
    this.needsMaintenance = false;
    this.tripsSinceMaintenance = 0;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, weight){
    super(make, model, year, weight);
    this.isDriving = false;
  }

  drive(){
    this.isDriving = true;
  }

  stop(){
    this.isDriving = false;
    this.tripsSinceMaintenance++;
    if (this.tripsSinceMaintenance > 100){
      this.needsMaintenance = true;
    }
  }
}

class Plane extends Vehicle {
  constructor(make, model, year, weight){
    super(make, model, year, weight);
    this.isFlying = false;
  }

  fly(){
    if(this.needsMaintenance){
      console.log("You cannot fly until this plane is repaired.")
      return false;
    } else {
      this.isFlying = true;
    }
  }

  land(){
    this.isFlying = false;
    this.tripsSinceMaintenance++;
    if (this.tripsSinceMaintenance > 100){
      this.needsMaintenance = true;
    }
  }
}

const lambo = new Car("Lamborghini", "Huracan", 2021, 3618);
const subi = new Car("Subaru", "Outback", 2016, 3937);
const iceCreamTruck = new Car("Ford", "e-350", 2015, 4773);
let cars = [lambo, subi, iceCreamTruck];

const cessna = new Plane("Cessna", "172 Skyhawk", 1960, 2220);
const blackHawk = new Plane("Sikorsky", "UH-60 Black Hawk", 1985, 12511);
const dreamLiner = new Plane("Boing", "787 Dreamliner", 2013, 500000)
let planes = [cessna, blackHawk, dreamLiner];

function drivingSimulator(trips){
  console.log("start your engines!");
  for(let i = 0; i < trips; i++){
    index = Math.floor(Math.random() * cars.length);
    cars[index].drive()
    // *some time passes*
    cars[index].stop()
  }
  for(car of cars){
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Weight: ${car.weight}lbs, NeedsMaintenance: ${car.needsMaintenance}, TripsSinceMaintenance: ${car.tripsSinceMaintenance}`)
  }
}

function flyingSimulator(trips){
  console.log("ready for take-off!")
  for(let i = 0; i < trips; i++){
    index = Math.floor(Math.random() * planes.length);
    let plane = planes[index];
    plane.fly()
    // *some time passes*
    if(plane.isFlying){
      plane.land()
    } else {
      console.log(`repairing ${plane.model}...`)
      plane.repair() // do regular maintenance 
    }
  }
  for(plane of planes){
    console.log(`Make: ${plane.make}, Model: ${plane.model}, Year: ${plane.year}, Weight: ${plane.weight}, NeedsMaintenance: ${plane.needsMaintenance}, TripsSinceMaintenance: ${plane.tripsSinceMaintenance}`)
  }
}

drivingSimulator(300);
flyingSimulator(300);