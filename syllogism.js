//Pirple Assignment 4 - Functions

/*part 1.*/
const mortals = [
    "Plato",
    "Aristotle",
    "Nietzsche",
    "Socrates",
    "Descartes",
    "Marx"
];

const immortals = [
    "God",
    "Turritopsis Dohrnii", //jellyfish
];

function Being(name){
    this.name = name;

    const isMortal = () => {    
        let isMortal = false;
        mortals.forEach((i) => {
            if (this.name === i) {   
                isMortal = true;
            } 
        });
        return isMortal;
    }

    const isImmortal = () => {
        let isImmortal = false;
        immortals.forEach((i) => {
            if (this.name === i){
                isImmortal = true;
            }
        })
        return isImmortal;
    }

    if (isMortal()){
        console.log(this.name + " is a mortal");
    } else if (isImmortal()){
        console.log(this.name + " is immortal");
    } else {
        console.log("'" +  name + "'" + " doesn't look like a valid entry");
    }
}
var socrates = new Being("Socrates");
var god = new Being("God");
var gibberish = new Being("asdghjkl");

/* part 2. */
const cakeFlavours = ["chocolate", "vanilla"];

const cake (flavours, choc) => { 
//flavours: an array of flavours (expecting choc and vanilla)
//choc: true or false
    if (choc){
        console.log("the cake is " + flavours[0]);
    } else {
        console.log("the cake is not " + flavours[0] + ", therefore it is " + flavours[1]);
    }
}
cake(cakeFlavours, true);
cake(cakeFlavours, false);
