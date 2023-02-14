

// pass default parameters in any function's values

// Ex :- 1

function person(x,y="Patel")
{
    return  x + " " + y;
}

console.log(person("Dixita"));

console.log(person("Mayank"));

// Ex :- 2

function sum(i,j=10)
{
    return i + j;
}

function mul(k,z=5)
{
    return (z * sum(2))/k;
}

console.log(mul(2));