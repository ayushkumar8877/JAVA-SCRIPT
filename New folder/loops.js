// for loop
// console.log("Print Odd number")
// for(let i = 1; i<=100; i++){
//     if(i%2!= 0){
//         console.log(i)
//     }
// }

// console.log("Print Even number")
// for(let i = 1; i<=100; i++){
//     if(i%2=== 0){
//         console.log(i)
//     }
// }

let year = 2025
year = String(year)
let sum = 0;

for(let i=year.length - 1; i>=0; i--){
    sum = sum + Number(year[i]);
}

console.log(sum)
// console.log(typeof reverseNum)
// reverseNum = Number(reverseNum)
// console.log(typeof reverseNum)








