"use strict";
//Clubs/Combines a bunch of data types and gives them an Alias name
function getRGBColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
var myRgb = [1, 2, 3];
var randomRgb = getRGBColor();
console.log(myRgb, randomRgb);
var myUser = { name: "Luigi", score: 100 };
function printUser(user) {
    console.log(`Player name: ${user.name}, Score : ${user.score}`);
}
printUser(myUser);
printUser({ name: 'mario', score: 34 });
