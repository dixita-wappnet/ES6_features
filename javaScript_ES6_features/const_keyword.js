

// constant keyword is similar to let keyword.
// except constant keyword value cannot be changed.
// const keyword is not use inside the loop.
// const keyword is not use outside the function or method.
// however, const keyword value changed in object properties and array elements.


// EX :- 1

var userName = "Mitesh Patel";

for (const i=0; i<=10; i++)
{
    console.log(i);            // print only 0.
    console.log(userName);     // print = Mitesh Patel.
}

console.log(i);                // error generated.


// Ex :- 2

var nam = "Mittal Patel";

const d = 50;

console.log(nam);    // print = Mittal Patel.
console.log(d);      // print = 50.

const d = 100;

console.log(d);     // error generated.

d = 100;

console.log(d);      // error generated.

// Ex :- 3

// changing object property value
const person = {

      fname: "Kajal",
      lname: "Oja",
      age: 25
};

console.log(person);    // print object
console.log(person.lname);  // print = Oja
console.log(person.age);    // print = 25

person.age = 80;

console.log(person.age);     // print = 80


// changing array element value

const colors = ["green","red","black"];

console.log(colors);        // print array
console.log(colors[0]);     // print = green
console.log(colors[2]);     // print = black
console.log(colors[1]);     // print = red

colors[1] = "yellow";
 
console.log(colors[1]);     // print = yellow
