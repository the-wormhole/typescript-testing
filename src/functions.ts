 function add(a :number, b :number):number{    //argument types are necessary to be decalred, return types can be inferred
    return a+b;
 }

 console.log(add(2,1));

 //Arrow functions

 var sub = (a:number,b:number):number =>{
    return a - b;
 }

 console.log(sub(3,2));

 // void return type
 const total = (arr:number[]) => {
    console.log(arr.reduce((a,c)=>{
        return a + c
    },0))
 }

 total([1,2,53,4,3,23,3,43,43]);