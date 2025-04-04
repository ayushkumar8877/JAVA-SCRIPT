 const accountId = 1234455
let accountEmail = "ayushkumar888770@gmail.com"
var accountPassword = "12345678"
accountcity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ritak1@hc.com"
accountPassword = "123456789"
accountcity = "Pune"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/
 console.table([accountId, accountEmail, accountPassword, accountcity, accountState])