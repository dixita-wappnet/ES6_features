
// slice() method :- 
// 1
let text = "apple, banana, kiwi";

let part = text.slice(4,8);   

console.log(part);         //e, b

// 2
let part1 = text.slice(7);

console.log(part1);       //banana, kiwi

// 3
let part2 = text.slice(-12);

console.log(part2);     //banana, kiwi 

// 4
let part3 = text.slice(-12,-6);

console.log(part3);     //banana


// substring() method :-
// 1 

let text1 = "apple, banana, kiwi";
let sbstr = text1.substring(4,8);

console.log(sbstr); //e, b

// 2
let sbstr1 = text1.substring(7,13);

console.log(sbstr1);  //banana

// 3
let a = text1.substring(7,6);

console.log(a); //space print


// replace() method :-
// 1
let f = "please visit microsoft!";

let newText = f.replace("microsoft","wappnet");

console.log(newText); // please visit wappnet!

// 2 
let newText1 = f.replace("MICROSOFT","wappnet");

console.log(newText1); // please visit microsoft!

// 3
let newText2 = f.replace(/MICROSOFT/i,"wappnet");

console.log(newText2); // please visit wappnet!

// 4
let f1 = "please visit microsoft and microsoft!";

let newText3 = f.replace(/microsoft/g, "wappnet");

console.log(newText3);  //please visit wappnet!


// replaceAll() method :-
//1

let sen = "I love cats. Cats are very easy to love. Cats are very popular."

sen = sen.replaceAll("Cats","Dogs");
sen = sen.replaceAll("cats","dogs");

console.log(sen);  //I love dogs. Dogs are very easy to love. Dogs are very popular.

//2
sen = sen.replaceAll(/Cats/g, "Dogs");
sen = sen.replaceAll(/cats/g, "dogs");

console.log(sen);  //I love dogs. Dogs are very easy to love. Dogs are very popular.


// toUpperCase() method :-
//1
let word = "hello world!";
let word1 = word.toUpperCase();

console.log(word1);  //HELLO WORLD!


// toLowerCase() method :-
//1
let pqr = "Welcome Dixita!";
let abc = pqr.toLowerCase();

console.log(abc);  //welcome dixita!


// concat() method :- 
//1
let a1 = "Hello";
let a2 = "world";
let a3 = a1.concat(" ", a2);

console.log(a3);  //Hello world


// trim() method :- 
//1
let d1 = "       Hello World!      ";
let d2 = d1.trim();

console.log(d1);   //       Hello World!      .
console.log(d2);   //Hello World!.


// trimStart() method :-
//1
let t1 = "         Hello World!       ";
let t2 = t1.trimStart();

console.log(t1);   //         Hello World!       .
console.log(t2);   //Hello World!       .


// trimEnd() method :-
//1
let u1 = "        Hello World!            ";
let u2 = u1.trimEnd();

console.log(u1);   //        Hello World!            .
console.log(u2);   //        Hello World!.


// padStart() method :- 
//1
let y1 = "5";
let padded = y1.padStart(4, "0");

console.log(y1);   //5
console.log(padded);  //0005

//2
let y2 = "5";
let padded1 = y1.padStart(3, "3");

console.log(y2);   //5
console.log(padded1);  //335

//3
let num = 5;
let y3 = num.toString();  // covert number to string
let padded2 = y3.padStart(5, "10");

console.log(padded2);  //10105


// padEnd() method :-
//1
let r1 = "5";
let r2 = r1.padEnd(4, "x");

console.log(r2);  //5xxx


// charAt() method :-
//1
let i = "HELLO WORLD";
let char = i.charAt(0);

console.log(char); //H

//2
let i1 = "HELLO WORLD";
let char1 = i.charAt(8);

console.log(char1); //R


// charCodeAt() method :- 
//1
let o = "HELLO WORLD";
let chr = o.charCodeAt(0);

console.log(chr);   //72

//2
let o1 = "HELLO WORLD";
let chr1 = o.charCodeAt(1);

console.log(chr1);  //69


// property access :-
//1
let h = "HELLO WORLD";
let h1 = h[0];

console.log(h1);  //H

//2
let h2 = "HELLO WORLD";
let h3 = h2[8];

console.log(h3); //R


// converting string to array :- 
//1
let s = "apple, banana, orange";
let s1 = s.split(",");

console.log(s1);   // print array
console.log(s1[0]);  //apple


// includes() method :-
//1
let j = "Hello world, welcome to the universe.";
console.log(j.includes("world")); //true
console.log(j.includes("dixita")); //false


// startsWith() method :- 
//1
let l = "Hello world, welcome to the universe.";
console.log(l.startsWith("Hello")); //true
console.log(l.startsWith("welcome")); //false


// endsWith() method :-
//1
let k = "John Doe";
console.log(k.endsWith("Doe")); //true
console.log(k.endsWith("John")); //false







