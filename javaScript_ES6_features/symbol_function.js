

// javascript symbol is a primitive datatype just like number, string, or boolean.
// using symbol() to create a unique identifiers.

//Ex :- 1

const person = {

    fname: "Rahul",
    lname: "Gupta",
    age: 35,
    eyecolor: "black"
};

let id = Symbol('id');
person[id] = 143;

console.log(person);

console.log(person[id]);

console.log(person.id);

let email = Symbol('email');

person[email] = "rahul.wappnet@gmail.com";

console.log(person[email]);

