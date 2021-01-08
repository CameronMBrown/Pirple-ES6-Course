//Pirple Assignment 6 - loops

function fizzBuzz(loops){
//as per the requirements of this assignment, fizzBuzz() also prints "prime!" if a prime number is found

    const isPrime = (num) => {
        for (let j = 2; j < num; j++){
            //if a divisable number is found, the number is not prime.
            if (num % j === 0){ return false; }
        }
        //otherwise, as long as the number is not 1 the number is prime.
        return num > 1;
    }

    for (let i = 1; i <= loops; i++){
        if (isPrime(i)){
            console.log("prime!");
        } else if(i % 15 === 0){
        // % 15 instead of %3 && %5 mathematically equivelent
            console.log("Fizzbuzz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else if (i % 3 === 0){
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(100);

