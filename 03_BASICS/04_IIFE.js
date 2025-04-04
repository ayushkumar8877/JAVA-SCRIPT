//Immediately Invoked Function Expression (IIFE)

(function Ayush(){
    // this is named IIFE
    // console.log("DB CONNECTED");
}) ();

// global scope ke error aur declaration ko hatane ke liye IIFE use krte hai

( (name) => {
    // THIS IS WITHOUT NAMED IIFE
    // console.log(`DB CONNECTED TWO ${name}`);
})("Ayush");  

//CALL sTACK=================================================   
function one(){
    console.log("I am one");
}
function two(){
    console.log("I am two");
}
function three(){
    console.log("I am three");
}

one();
two();
three(); 