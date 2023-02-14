
// Ex :- 1


function sum(...args){

    let sum = 0;
    for (let arg of args) 
    sum += arg;
    return sum;
    
}
    

let x = sum(20,30,40,50,60,70,80,90,100);

console.log(x);

// Ex :- 2

function sortNames(...names)
{
    return names.sort()
}



console.log(sortNames("mahesh","vijay","chetan"));