/*
The primary difference between destructuring arrays and objects is that you can take 
advantage of the order of elements in an array to grab a specific index, but when 
you are destructuring objects, you have to rely on the key/value accosiation to get data.

Array destrcturing example:
a useful case for destructuring is when a function returns an array, and we will need to use 
each value in the array differently at some later point.*/

//ex1
function sumAndProduct(num1, num2) {
  return [num1 + num2, num1 * num2];
}

const [sum, product] = sumAndProduct(5, 8);

console.log(sum, product);

/* 
Another Example: (arrays)
In my last assignment, I stored user saved lists with a consistant format, with the 
title always in the 0th index, I could have used destructuring like this */

//ex2

let userList = [
  "Homework",
  "Calculus ch.3",
  "Biology reading",
  "Pirple ES6 module 5",
];

const [title, ...list] = userList;

console.log(title); //homework

/* Object Destructuring example:
destructuring can be useful especially when a generic object can have default values. */

const moneyTree = {
  lifespan: 10,
  type: "biennial",
  bearsFruit: true,
  habitat: "South America",
};

const pothos = {
  lifespan: 5,
  type: "perenial",
  bearsFruit: false,
  habitat: "Solomon Islands",
  colour: ["green", "white"],
};

//showing renaming variables, default values
var {
  lifespan: t,
  type,
  bearsFruit: fruit,
  habitat,
  colour = "green",
} = moneyTree;
console.log(colour); //green

var {
  lifespan: time,
  type,
  bearsFruit: fruit,
  habitat,
  colour = "green",
} = pothos;
console.log(colour); //green white

/*Array inside object example*/
//suppose the todo project creates user Objects like this
//lets use destructuring to get the titles of the lists
let user1 = {
  name: "Cameron",
  email: "cameron@pirple.com",
  pw: "password",
  accountCreated: "08-02-2021",
  lists: [
    ["homework", "calculus", "biology", "Pirple"],
    ["chores", "shovel snow", "water plants", "dog bath", "recycling"],
  ],
};

const {lists: [[title1], [title2]]} = user1;

console.log(title1, title2); //homework chores

/*Object inside object*/

const person = {
  name: "Cameron",
  email: "cameron@pirple.com",
  address: {
    street: "Main St.",
    number: 100,
    postalCode: "A1B 2C3",
  },
};

function getStreet(person) {
  let { address: { street } } = person;
  return street;
}

console.log(getStreet(person)); //Main St.

/*Object inside array*/

const jellyBeans = [{colour: "green", flavour: "lime"}, {colour: "yellow", flavour: "lemon"}, {
  colour: "black", flavour:"licorice"}, {colour: "red", flavour:"cherry"}];

function getFlavours(beans){
  const [{flavour: f1}, {flavour: f2}, {flavour: f3}, {flavour: f4}] = jellyBeans;
  return [f1, f2, f3, f4];
}

console.log(getFlavours(jellyBeans));// lime lemon licorice cherry

/*Final thoughts: Destructuring is going to be very valuable to improve the readablity and 
speed at which I write code. One thing that is interesting to think about is an object within
objects with n depth. This of course is syntatically possible, but would be hard to deconstruct 
unless every key at every level is known by the programmer ahead of time, which is probably unlikely
with a nested object of infinite depth. I assume the best way to deal with a object or an array of 
infinite depth or unknown length would be a recursive funtion*/
