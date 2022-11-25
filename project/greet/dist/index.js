"use strict";
function greet(name) {
    return "Hello " + name;
}
var greeting = function (name) {
    console.log("Greeting : " + name);
    return "Greeting " + name;
};
console.log(greet("Jack"));
console.log(greeting("John"));
