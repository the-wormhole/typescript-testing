var age:any;
age = 1;
age = false;
console.log(age);

let title;
title = "bigger";
title = false;
console.log(title);

//any arrays

var things: any[] = [1,"sdg",543,false];
things.push({a: 1, b: "fgsf"})
console.log(things);

//any functions

function double(value: any): any {
    return value + value;
}

console.log(double("1"), typeof double("1"));
console.log(double(1))
