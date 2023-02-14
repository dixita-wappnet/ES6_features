
//converting arrays to strings :-
//1
const f = ["banana", "orange", "apple", "mango"];
console.log(f.toString());  //banana,orange,apple,mango

//join() method :-
//1
const f1 = ["banana", "orange", "apple", "mango"];
console.log(f1.join("*"));  //banana*orange*apple*mango

//pop() method :-
//1
const f2 = ["banana", "orange", "apple", "mango"];
console.log(f2.pop());  //mango
console.log(f2);  //(3) ['banana', 'orange', 'apple']
//push() method :-
//1
const f3 = ["banana", "orange", "apple", "mango"];
console.log(f3.push("kiwi")); //5
console.log(f3);  //(5) ['banana', 'orange', 'apple', 'mango', 'kiwi']

//shift() method :-
//1
const f4 = ["banana", "orange", "apple", "mango"];
console.log(f4.shift()); //banana
console.log(f4);  //(3) ['orange', 'apple', 'mango']

//unshift() method :-
//1
const f5 = ["banana", "orange", "apple", "mango"];
console.log(f5.unshift("lemon")); //5
console.log(f5);  //(5) ['lemon', 'banana', 'orange', 'apple', 'mango']

//changing elements :-
//1
const f6 = ["banana", "orange", "apple", "mango"];
f6[0] = "kiwi";
console.log(f6); //(4) ['kiwi', 'orange', 'apple', 'mango']

//array length :-
//1
const f7 = ["banana", "orange", "apple", "mango"];
console.log(f7.length);   //4

console.log(f7[f7.length] = "kiwi");
console.log(f7.length);   //5

//delete() method :- 
//1
const f8 = ["banana", "orange", "apple", "mango"];
delete f8[0];
console.log(f8); //(4) [empty, 'orange', 'apple', 'mango']

//concat() method :- 
//1
const f9 = ["banana", "orange", "apple", "mango"];
const f10 = ["lemon", "kiwi"];
const fruits = f9.concat(f10);
console.log(fruits); //(6) ['banana', 'orange', 'apple', 'mango', 'lemon', 'kiwi']


//merging three arrays :-
//1
const f11 = ["banana", "orange", "apple", "mango"];
const f12 = ["lemon", "kiwi"];
const f13 = ["grapes"];
const allFruits = f11.concat(f12,f13);
console.log(allFruits); //(7) ['banana', 'orange', 'apple', 'mango', 'lemon', 'kiwi', 'grapes']

//merging an array with values :-
//1
const f14 = ["banana", "orange", "apple", "mango"];
const f15 = f14.concat("lemon");
console.log(f15);    //(5) ['banana', 'orange', 'apple', 'mango', 'lemon']

//splice() method :-
//1
const f16 = ["banana", "orange", "apple", "mango"];
const f17 = f16.splice(2, 2, "lemon","kiwi");
console.log(f17);  //(2) ['apple', 'mango']
console.log(f16);  //(4) ['banana', 'orange', 'lemon', 'kiwi']

//slice() method :-
//1
const f18 = ["banana", "orange", "apple", "mango"];
const f19 = f18.slice(1);
console.log(f19);  //(3) ['orange', 'apple', 'mango']

const f20 = f18.slice(3);
console.log(f20);  //['mango']

const f21 = f18.slice(1,3);
console.log(f21);  //(2) ['orange', 'apple']

const f22 = f18.slice(2);
console.log(f22);  //(2) ['apple', 'mango']


//automatic toString() method :-
//1
const f23 = ["banana", "orange", "apple", "mango"];
console.log(f23.toString());  //banana,orange,apple,mango

//2
const f24 = ["banana", "orange", "apple", "mango"];
document.getElementById("demo").innerHTML = f24;  //banana,orange,apple,mango


//forEach() method :-
const numbers = [45, 4, 9, 16, 25];
let txt = " ";
numbers.forEach(myFunction);

function myFunction(value, index, array)
{
    txt += value + "\n ";
}

console.log(txt);   /*  45
                        4
                        9
                        16
                        25 */

//map() method :-
const num1 = [52, 85,63, 21, 1, 25, 4];
const num2 = num1.map(muFunction);

function muFunction(value, index, array)
{
    return value * 2;
}

console.log(num2);  // (7) [104, 170, 126, 42, 2, 50, 8]


//filter() method :-
const numbers1 = [45, 4, 9, 16, 25];
const over18 = numbers1.filter(myFunction);

function myFunction(value, index, array)
{
    return value > 18;
}

console.log(over18);  //(2) [45, 25]


//reduce() method :-
const numbers2 = [45, 4, 9, 16, 25];
let sum = numbers2.reduce(myFunction);

function myFunction(total, value, index, array)
{
    return total + value;
}

console.log(sum);  //99


