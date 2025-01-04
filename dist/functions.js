"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 1));
//Arrow functions
var sub = (a, b) => {
    return a - b;
};
console.log(sub(3, 2));
// void return type
const total = (arr) => {
    console.log(arr.reduce((a, c) => {
        return a + c;
    }, 0));
};
total([1, 2, 53, 4, 3, 23, 3, 43, 43]);
