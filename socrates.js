// Pirple Assignment 3 - if statements and operators

/*part 1.*/

function Animal(species, name) { //Constructor
  this.species = species;
  this.name = name;
  this.mortal = true; //all animals are mortal
  this.title = function () {
    console.log(this.name + " is a " + this.species);
  }
}

function mortality(animal){
  if (animal.species == "human"){
    animal.title();
  }
  if (animal.mortal === true){ //all animal objects have attribute mortal = true
    console.log("therefore, " + animal.name + " is a mortal.");
  }
}

const socrates = new Animal("human", "Socrates"); //initialize Socrates as an animal object
mortality(socrates); // "Socrates is a human, therefore, Socrates is a mortal."

/*part 2.*/

function Cake(flavour){ //Constructor
  this.flavour = flavour;
}

/*detirmines if a cake has a chocolate flavour*/
function isChocolate(cake){
  if (cake.flavour == "chocolate"){
    return true;
  } else {
    return false;
  }
}

/*checks if cake is vanilla or chocolate*/
function vanillaOrChoc(cake) {
  if (cake.flavour == "vanilla" || "chocolate"){
    return true;
  } else {
    return false;
  }
}

function cakeLogic(cake){
  if (vanillaOrChoc(cake)) {
  console.log("this cake is either vanilla or chocolate");
    if (isChocolate(cake)){
      console.log("this cake is not vanilla, therefore it is chocolate.");
    } else { 
      console.log("this cake is not chocolate, therefore it is vanilla.");
    }
  }
  
}

const chocolateCake = new Cake("chocolate");
const vanillaCake = new Cake("vanilla");
cakeLogic(chocolateCake); // "this cake is not vanilla, therefore it is chocolate."
cakeLogic(vanillaCake); // "this cake is not chocolate, therefore it is vanilla."