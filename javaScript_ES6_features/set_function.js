
// set() function use for create a new object.

// Ex :- 1 

//create a set 

const users = new Set();

//add values to the set

users.add("user1");
users.add(["user2","female"]);
users.add({ 
      
    name: "user3",
    age : 20
});

console.log(users.size);
console.log(users);