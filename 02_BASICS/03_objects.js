// singleton

// object literals======

const mySym = Symbol("key1")
const Jsuser = {
    name: "Ayush",
    "full name": "Ayush Kumar",
    [mySym]: "mykey1",
    age: 22,
    location: "Patna",
    email: "ayushkumar88770@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser[ "age"])
// console.log([mySym])

Jsuser.email = "Ayushkumar@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "ayushkr@gmaiol.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello Js user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo( ));