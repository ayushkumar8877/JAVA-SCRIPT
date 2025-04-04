// Primitive Data Types
// 7 types : Number, String, Boolean, Undefined, Null, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id === anotherId) // false

// const bigNumber = 1234567890123456789012345678901234567890n
// console.log(bigNumber)

//Reference Data Types(Non-Primitive Data Types)
// Object Literals, Arrays, Functions, Dates, Anything else 

const heros = ["Saktiman", "Shaktimaan", "Shaktimaan"]
let myObj = {
    name: "Ayush",
    age: 25
}


// const myFunction = function() {
//     console.log("Hello, World!")
// }

// console.log(typeof anotherId )


// ==============================================

// Stack (premitive), Heap (Non-Primitive)
let myYoutubename = "ayush.in"

let anothername = myYoutubename 
anothername = "aaloo"

console.log(myYoutubename); 
console.log(anothername);

let userOne = {
    email: "ayush@yahoo.in",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ayush.com"

console.log(userOne.email);
console.log(userTwo.email);
