//if 
// const isUserloggedIn = true
// const temperature = -100

// if (temperature < 50){
//     console.log("executed");
// }else{
//     console.log("chutiya ho ky be");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }else{
//     console.log("hero");
// }

// console.log(`User power: ${power}`);


// const balance = 100
// // if ( balance > 500) console.log("test");

// if (balance < 500){
//     console.log("less then 500");
// }else if (balance < 750){
//     console.log("less then 750");
// }else{
//     console.log("greater thrn 1600")
// } 

const UserloggedIn = true
const debitcard = true
const loggedinfromGoogle = false
loggedinfromemail = true

if(UserloggedIn && debitcard){
    console.log("Allow to buy course");
}

if(loggedinfromGoogle || loggedinfromemail){
    console.log("User logged in");
}

