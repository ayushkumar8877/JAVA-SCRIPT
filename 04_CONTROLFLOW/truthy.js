const userEmail = []
if (userEmail){
    console.log("Got user eamil");
}else{
    console.log("Don't have user email");
}



// flasy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// "0", 'false', "false", " ", [], {}, function(){}, 


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = { }
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// NULLISH COalescring Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 10
console.log(val1); 

//TERNIARY OPERATOR
// CONDITION ? TRUE : FLASE

const ice = 200
ice <= 120 ? console.log("less than 120") : console.log("more than 120") 