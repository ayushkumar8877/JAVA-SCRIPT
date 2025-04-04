

function sayMyName() {
  console.log("A");
  console.log("y");
  console.log("u");
  console.log("s");
  console.log("h");
}

// sayMyName()   //ye hua execution
// sayMyName   ye hua refrence

// function addTwoNumbers(num1, num2){
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
//    let result = num1 + num2
//    return result;
     return num1 + num2
  }

const result = addTwoNumbers(5, 8)
// console.log("Result is:-", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ayush"))
// console.log(loginUserMessage()) 
 
function calculateCartPrice(val1, val2, ...num1){ //... is a rest operator in function
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 700, 900))

const user = {
    username: "Ayush",
    prices: 889
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
} 

// handleObject(user) 
handleObject({
    username: "Ayush",
    price: 300
})


const mynewArray = [200, 300, 400, 500,600]
 
function returnSecondValue(getvalue){
    return getvalue[4]
}

console.log(returnSecondValue(mynewArray));