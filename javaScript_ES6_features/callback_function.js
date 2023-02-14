

// callback function use for function inside function.

//Ex :- 1

setTimeout(function () {

    console.log("timer is late for 5 seconds.");
},5000);

function x(y){

    console.log("X is first.");
    y();
}
x(function y() {

    console.log("Y is second.");
})

// add event in button from index.html

document.getElementById("me")
addEventListener("click", function asd() {

    console.log("hello dixita!");
    document.write("Hello Dixit!");

});