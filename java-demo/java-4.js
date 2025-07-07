// primitive

// 7 type :- String , Number , Boolearn , Null , Undefind , Symbol , Bigint .

// ex :- String 
const score = 100;

// ex :- number
const scorelue = 100.5;

// ex :- boolearn 
const isLoggedIn = false; 

// ex :- null
const outSideTemp = null;

// ex :- undefind
let Amout;

// Ex :- Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNmber = 11234687864564n


// noprimitive 

// 3 type :- Array , Object , Function.

const name = ["asd" , "fgh" , "qwe"];

{
    name : "aaass";
    age : 20;
}

const myFunction = function (){
    console.log("hello world");
}

console.log(typeof myFunction);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




// || ========================================================================= ||

// stack (primitive) && heap (non-primitive)

let youtubeName = "xyz"

let youtubeNumber = youtubeName
youtubeNumber = "abcd"

console.log(youtubeName);
console.log(youtubeNumber);


let userOne = {
    name: "paresh",
    id: "xyz"
}

let userTwo = userOne
userTwo.name = "lol";

console.log(userOne);
