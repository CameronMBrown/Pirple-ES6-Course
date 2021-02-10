//Pirple Assignment 8 - Exceptions

function UndefinedException(message){
  this.message = message;
  this.name = "Non-String Exception";
  this.toString = () => {
    return `${this.name}: ${this.message}`;
  }
}

function NonStringException(message){
  this.message = message;
  this.name = "Non-String Exception";
  this.toString = () => {
    return `${this.name}: ${this.message}`;
  }
}

/* Asignment Specifications
1. Function Accepts one parameter: a string. A JSON-stringified version of a Javascript Array
2. Parses the JSON to obtain the Array
3. Reverses the order of the the items in the Array
4. JSON-stringifies the result, and returns it.
*/
function reverseArray(arr){
  let result = []; //create empty array to be filled in reverse order

  if (typeof arr == "number"){
    console.log(`Attempting to convert "${arr}" to array...`);
    return reverseArray(JSON.stringify(arr.toString().split("")));
  }

  //sanitize input argument
  try { 
    if (arr === undefined) { throw new UndefinedException("Undefined or empty input argument.")}
  } catch (UndefinedException) { console.log("undefined values cannot be reversed");
    return false;
  }
  try {
    if(typeof arr !== "string") { throw new NonStringException("Argument does not appear to be a String. "); }
  } catch (NonStringException) {
    if (arr.length > 0){
      console.log(NonStringException.message + "Trying stringify...");
      return reverseArray(JSON.stringify(arr));
    } 
    console.log(NonStringException.message);
    return false;
  }
  //attempt to parse then reverse
  try {
    const parsed = JSON.parse(arr);
    for(let i=parsed.length-1; i > -1; i--){ //"backwards" loop
      result.push(parsed[i]); //push item at index i
    }
  }
  catch(SyntaxError){
    if (typeof arr === "string") {
      console.log(`Attempting to convert "${arr}" to array...`);
      return reverseArray(JSON.stringify(arr.split("")));
    } 
  }

  return JSON.stringify(result);
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c", "d"];

// TESTCASES
console.log(reverseArray(JSON.stringify(array1)));  // [3, 2, 1]
console.log(reverseArray(JSON.stringify(array2)));  // ["d", "c", "b", "a"]
console.log(reverseArray());                        // false
console.log(reverseArray("string"));                // ["g","n","i","r","t","s"]
console.log(reverseArray(array1));                  // [3, 2, 1]
console.log(reverseArray(true));                    // false 
console.log(reverseArray(JSON.stringify([0])));     // [0]
console.log(reverseArray(JSON.stringify([])));      // []
console.log(reverseArray(123));                     // ["3","2","1"]
console.log(reverseArray(array1.concat(array2)));   //["d","c","b","a",3,2,1]