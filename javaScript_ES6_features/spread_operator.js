

// spread operator expand an iterable (like an array) into more elements.
// spread operator denoted by "...".


// Ex :- 1

const personDetails1 = ['Id','firstName','lastName','email','contactNumber', 'enrollmentNo.'];

const personDetails2 = [...personDetails1, 'gender','status'];

console.log(personDetails1);
console.log(personDetails2);

// Ex :- 2

const num = [10,20,340,340,50,60,70,80,90,100];

const maxValue = Math.max(...num);

console.log(maxValue);