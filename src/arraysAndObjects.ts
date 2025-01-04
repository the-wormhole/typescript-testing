//Arrays and Strings
var fruits:string[] = ["Orange","Apple","Mango"];
var myfruit=["Orange","Banana"];    //type inference

var fruit = fruits.slice(1,2);
var anotherfruit = fruits[2].substring(1,3);    //type inference

console.log(fruit,anotherfruit,fruits,myfruit);

var numbers:number[] = [1,2,3]

var mix = [1,"test",false]; // Uses Union types(discusssed in different document)
console.log(mix);


//Objects

let myObj:{a: number, b: string, c: boolean} = {
    a:32423,
    b:"sdvdsv",
    c:false
}

myObj.a = 3235235235
myObj.c = true
console.log(myObj);

//object inference

let obj = {             
    name:"abc",
    id:32532
}

console.log(obj);