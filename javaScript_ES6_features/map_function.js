

// use an object as a key is an important map feature.

// Ex :- 1

const fruits = new Map([

    ["apples", 1000],
    ["bananas", 500],
    ["oranges", 250]
]);

console.log(fruits.get("apples"));  // print = 1000

// Ex :- 2

const userDetails = new Map([

    ["user1",
      {
         age : 23
      }],

    ["user2",
      {
         age : 15
      }],

    ["user3",
      {
        age :76
      }]
]);

console.log(userDetails); // print map(3)

// map.get() method gets the value of a key in a map

console.log(userDetails.get("user2"));  // print => age = 15

// map.set() method =  add elements and change the value to a map with the set() method.


userDetails.set("user2", {age : 55});  // change the value of user2
userDetails.set("user4",{age : 66});   // add new user4 in userDetails

console.log(userDetails.get("user2"));  // print => age = 55
console.log(userDetails);  // print map(4)

// map.size property returns the number of elements in a map.

console.log(userDetails.size);  // print = 4

// map.delete() method removes a map element.

userDetails.delete("user4"); //delete the user4

console.log(userDetails);  //print = map(3)

//map.clear() method removes all the element from a map.

userDetails.clear(); //clear all data of userDetails

console.log(userDetails);  // print = map(0)

//map.has() method returns true if a key exists in a map.

console.log(fruits.has("apples")); // print = true

console.log(fruits); // print = map(3)

fruits.delete("apples"); // delete apples value

console.log(fruits); // print = map(2)

console.log(fruits.has("apples")); // print = false

// "typeof" returns object 

console.log(typeof fruits);  //print = object

// "instanceof" map returns true 

console.log(fruits instanceof Map); //print = true

// map.forEach() method invokes a callback for each key/value pair in a Map.

let text = " ";
fruits.forEach(function(value,key)

{
  text += key + " = " + value + "\n "
  
})

console.log(text);

// map.entries() method return an iterator object with the [key,values] in a Map.

let text1 = " ";
for(const y of fruits.entries()) 
{
  text1 += y + "\n ";
}

console.log(text1);

// map.keys() method returns an iterator object with the keys in a Map.

let text2 = " ";
for(const z of fruits.keys())
{
  text2 += z + "\n ";
}

console.log(text2);

//map.values() method returns an iterator object with the values in a Map.

let text3 = " ";
for(const d of fruits.values())
{
  text3 += d + "\n "
}

console.log(text3);







