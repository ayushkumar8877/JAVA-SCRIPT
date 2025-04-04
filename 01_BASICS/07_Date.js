// Dates 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 2, 25);
// let myCreatedDate = new Date(2025, 2, 25, 5, 3, 3);
// let myCreatedDate = new Date("01-12-2024")
// // console.log(myCreatedDate.toLocaleString());
 
// let myTimeStamp = Date.now();
// // console.log(myTimeStamp)
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/10000000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default', {
     weekday: "long"
})
