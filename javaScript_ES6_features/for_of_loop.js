

//  The new for...of loop allows us to iterate over arrays or other iterable objects very easily. 
//  The code inside the loop is executed for each element of the iterable object. 
// The for...of loop doesn't work with objects because they are not iterable. 
// If you want to iterate over the properties of an object you can use the for-in loop.


// Ex:- 1 

// iterating over array 

let letters = ["a","s","d","f","g","h","j","l"];

console.log(letters);

for (let letter of letters)
{
  
    console.log(letter);
}

//iterating over string 

let hello = "Zalak Prajapati";

console.log(hello);

for(let x of hello)
{
    y = (x) + 'D';
    console.log(y);
}



