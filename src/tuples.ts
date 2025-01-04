//similar to arrays 
//but can store different data types in a specific order

let person:[number,boolean,string] = [1,false,"sdgdsf"];
console.log(person);
// [1,true,"dasdad",false] or ["dsfdsf",false,1] or ["asd","asdsa"] all throw errors

//examples 

let xy:[number,number]
xy = [34,34.4]

let hsla:[number,string,string,number];
hsla = [23,"100%","50%",10];

//named tuples

var namedT:[name:string,age:number] //provides a bit more context about the variables that are to be passed to tuple as a value
namedT = ["Neha",2];
console.log(namedT[0]);