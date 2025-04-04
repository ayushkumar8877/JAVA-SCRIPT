const user = {
    username: "Ayush",
    price: 699,
    
    welcomMessage: function(){
        console.log(`${this.username}, Welcome to website`);  
        console.log(this);
         
    }  
}

// user.welcomMessage()
// user.username = "Ritik"
// user.welcomMessage()
// console.log(this);


// function chai(){
//    let username = "Ayush"
//    console.log(this.username ); 
// }

// chai()

// const chai = function chai(){
//        let username = "Ayush"
//        console.log(this.username );
// }

// chai()


const chai = () => {
       let username = "Ayush"
       console.log(this );
}



//  chai()

// const addTwo = (num1, num2) => {  explicit me return keyword lagana hota hai
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)  //implicit me return keyword nhi lagana hota hai
const addTwo = (num1, num2) =>  ({username: 'Ayush'})
console.log(addTwo(3, 4))