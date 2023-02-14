
// let keyword is a use only inside the function or method or loop.
// let keyword is a not use outside the function or method or loop.
// The let keyword value can be changed but there is no need to declare the let keyword a second time.

// Ex :- 1

var userName = "Keyur Patel";

for(let i=0; i<=10; i++)
{
    console.log(i);     // successfully print the output
}
console.log(userName);  // successfully print the output
console.log(i);         // error generated

// Ex :- 2

var nam = "Dixita Patel";

let a = 10;

console.log(nam);
console.log(a);

a = 20;

console.log(a); 

// Ex :- 3

// changing array element value

let colors = ["green","red","black"];

console.log(colors);        // print array
console.log(colors[0]);     // print = green
console.log(colors[2]);     // print = black
console.log(colors[1]);     // print = red

colors[1] = "yellow";
 
console.log(colors[1]);     // print = yellow 

// changing object property value

let person = {

    fname: "Kajal",
    lname: "Oja",
    age: 25
};

console.log(person);        // print object
console.log(person.lname);  // print = Oja
console.log(person.age);    // print = 25

person.age = 80;

console.log(person.age);     // print = 80
