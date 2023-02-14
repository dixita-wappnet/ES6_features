

// javascript promise object contains both the producing code and calls to the consuming code.

// Ex :- 1

let p1 = new Promise (function(resolve,reject)
{
    console.log("Promise is pending");
    setTimeout(function() {

        console.log("timer is let for 5 seconds.");

    }, 5000);
    resolve(true);

});

let p2 = new Promise (function(resolve, reject)
{
    setTimeout(function() {

        console.log("promise is reject.");
    
    }, 2000);
    reject(new Error("plz, you first solve this error."));
});

p1.then(function(value){

    console.log(value);
});

p2.catch(function(error)
{
    console.log("some error occurred in p2");
})

console.log(p1,p2);

