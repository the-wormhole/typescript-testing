
let someId: number | string;
someId = 12;
someId = "abc"; // both work due to Unions
console.log(someId);

//Example use case

let email: string | null = null
email = "abc@d.com"
console.log(email);
email = null

// types Alias with Unions

type Id = number | string | null
let anotherId: Id = 989;
anotherId = "3rg3g3g345bdf";

// Issues with Unions

// only methods or functionality common to all the types in a Union can be applied to the variable of that union type
// example :- I can use parse in on a variable created using the above Union(Id) since it would not work on a number data type