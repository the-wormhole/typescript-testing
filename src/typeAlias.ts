//Clubs/Combines a bunch of data types and gives them an Alias name

type Rgb = [number,number,number];

function getRGBColor(): Rgb {

    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    return [r,g,b];
}

var myRgb: Rgb = [1,2,3];
var randomRgb: Rgb = getRGBColor();

console.log(myRgb,randomRgb);

//Object literal

type User = {
    name:string,
    score:number
}

var myUser: User = {name: "Luigi", score: 100}

function printUser(user:User): void {
    console.log(`Player name: ${user.name}, Score : ${user.score}`);
}

printUser(myUser);
printUser({name: 'mario', score:34});