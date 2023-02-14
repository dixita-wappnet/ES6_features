

// JavaScript classes are templates for javascript objects.
// use the keyword class to create a class.
// always add a method named constructor().
// javascript class is not an object.

// Ex :- 1

class car {

    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }
}

console.log(car);
const myCar = new car("ford",2014);

console.log("My favorite car is " + myCar.name + ". And this car lunched in " + myCar.year + " year.")

// Ex :- 2

class userProfile {

    constructor(firstName, lastName, birthYear)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

}

const user1 = new userProfile("Prem", "Patel", 1998);

console.log("The full name of user1 is " + user1.firstName + " " + user1.lastName + ".");
console.log("User1 birth Year is " + user1.birthYear + ".");

// Ex :- 3

class rectangle {

    //class constructor

    constructor(length, width)
    {
        this.length = length;
        this.width = width;
    }

    // class method

    getArea()
    {
        return this.length * this.width;
    }
}

// square class inherits from the rectangle class

class square extends rectangle {

    // child class constructor

    constructor(length) {

        // call parent's constructor

        super(length, length);
    }

    // child class method

    getPerimeter()
    {
        return 2*(this.length + this.width);
    }
}

let rectangle1 = new rectangle(5,50);

console.log(rectangle1.getArea());   // 250

let square1 = new square(20);

console.log(square1.getPerimeter());  // 80
console.log(square1.getArea());      // 400

console.log(square1 instanceof square);      // true
console.log(square1 instanceof rectangle);   // true
console.log(rectangle1 instanceof square);    // false
console.log(rectangle1 instanceof rectangle);   // true