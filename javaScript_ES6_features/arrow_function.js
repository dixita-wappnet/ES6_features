

// arrow function allow a short syntax for writing function expressions.
// not required to write "function" keyword, "return" keyword and also the "curly brackets".

// Ex :- 1 in ES5

let person = function(fname, lname)
{
    return `The full name of the person :- ` + fname + " " + lname;
}

 console.log(person("Damini","Patel"));    // print

 // EX :- 2 in ES6


 let person1 = (fname, lname) => "The full name of use :- " + fname + " " + lname;


console.log(person1("Patel","Ankit"));   //print

// Ex :- 3 in ES6

let sum = (a,b,c) => "The total sum of all element is " + (a + b + c);

console.log(sum(10,20,30));            //print

// Ex :- 4 in ES6

let fun = (a,b) => {

    const newValue = (a + b) * 10;
    return newValue;
}

console.log(fun(20,30));             //print = 500

// Ex :- 5 in ES6

// No parameter, single statement

var hello = () => alert('Hello!, Am I Peter Pakar');
hello(); // print = Hello!, Am I Peter Pakar

// Single parameter, single statement

var greet = name => alert("Hi " + name + "!");
greet("Peter"); // Hi Peter!

// Multiple arguments, single statement

var multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6


// Single parameter, multiple statements

var test = age => {
    if(age > 18 && age < 35) {
        alert(" You are Applicable for this vacancy");
    } else {
        alert("You are not applicable for this vacancy");
    }
}
test(21); //print = You are Applicable for this vacancy

// Multiple parameters, multiple statements

var divide = (x, y) => {
    if(y != 0) {
        return x / y;
    }
}
console.log(divide(10, 2)); //print = 5

