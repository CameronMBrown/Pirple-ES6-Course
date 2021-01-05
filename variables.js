// Pirple Assignment 2 - var, let and const

const fruits = [];
const veggies = [];

/*
VAR

Var is the least scrict initialization. Variables initialized with var outside of a funtion are global. 
Variables initialized within a funtion are not global, they will return undefined.
var can be a number, an array, an object etc.
*/
console.log(" - var - ");
var count = 0;

function varExample() {
    var a = "apples";
    addFruit("apples");
    printVar(a);
    if (a == "apples"){
        a = "apricots";
        addFruit("appricots");
        printVar(a);
    } 
    if (typeof a == 'string'){
        a = "avacados";
        addVeggie("avacados");
        printVar(a);
    }
    printVar(a);
}

// Calling printVar(a) here (outside the function where a is delclared) will throw an error.

varExample();

/*
LET

Unlike var, let has a stricter scope, including loops and conitionals. 
Variables initialized with let inside a loop or conitional will not maintain this value outisde the loop or conditional.
*/

console.log(" - let - ");
var b = "bananas"; //outside of a funtion, this is a global variable.
addFruit("bananas");

function letExample() {
    let b = "broccoli";
    addVeggie("broccoli");
    if (typeof b == "string") {
        let b = "blueberries";
        addFruit("blueberries");
        printVar(b); //prints blueberies, in this scope, blueberries has overridden both previous assignments.
    }
    printVar(b); //prints broccoli, blueberries is out of scope.
}
letExample();

printVar(b); //prints bananas, the original value. Changes made to b use let and are out of scope.

/*
CONST

const is used when the initial value of a variable is not meant to be overridden.
In the example below, you can see that new values may be appended to a const array, but reassigning a const variable throws an error.
Mutating objects and array attributs are valid, but not reassignments. For example, array.pop(); and array[index] = newval; are valid.
*/

console.log(" - const - ");

console.log(fruits);
console.log(veggies);

//fruits = ["pinapple"];  this would create an error, const objects cannot be overwritten.
//fruits = 1; would cause an error.
//veggies[0] = "green beans"; this is valid
//veggies.pop(); this is valid


/*
HOISTING

hoisting is the javascript behavior that allows variables to be assigned before they are initialized.
In this example you can see variables c and d are assigned before they are initialized. However, an explicit initialation must come later.
*/
console.log(" - hoisting - ");

function hoistingExample(){
    if (fruits.length > 0){
        c = "cucumber";
        d = "dragonfruit";
        printVar(c);
        }
    var c;
}
hoistingExample();
var d;
printVar(d);

/* HELPER FUNCTIONS */

function printVar(x){
    count++; //count is a global var, increments here will be reflected in the global scope.
    console.log(count + ": " + x);
}

function addFruit(fruit){
    fruits.push(fruit);
}

function addVeggie(veggie){
    veggies.push(veggie);
}