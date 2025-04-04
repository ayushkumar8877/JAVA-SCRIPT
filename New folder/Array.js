// let arr = ["bmw", "Volve", "Skoda", "Audi"]

// arr.forEach((val, idx) => {
//     console.log(val, idx);
// })


// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val,idx)=>{
//     arr[idx] = val*val;
//     console.log(arr[idx])
// })

//slice, splice
// let arr1 = [1, 2, 3, 4, 5]
// let newarr=arr1.slice(2, 5)
// console.log(newarr)

//splice
// let fruits = ["apple", "banana", "kiwi", "mango"]
// let newarr = fruits.splice(1, 1, "AAloo", "pineapple")
// console.log(newarr)

// looping methods
// some, every ->


// let arr = [1, 2, 3, 4, 5, 6]
// let ans = arr.every((val)=>{
//     if (val % 2 == 0){
//         return true;
//     }
//     return false;
// })
// console.log(ans);


// const data = [1, 2, "Three", 4, 5]
// function check(data){
//   let ans =  data.every((val)=>{
//         if(typeof val === "number"){
//             return true;
//         }
//         return false;
//     });
//     return ans;
// }

// console.log(check(data));


//map ->
// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = arr.map((val, idx)=>{
//     return val * val;
// })

// console.log(arr, newArr);

// const names = ["John Doe", "Jane Smith", "Alice Johnson"]
// let ans = names.map((Val, idx)=>{
//     let newArr = Val.split(" ");
//     return newArr[0][0] + "." + newArr[1][0]
// })
// console.log(ans);




const words = ["apple", "banana", "cherry", "date", "fig"];
let ans = words.filter((val)=>{
   return val.includes("a");
})
console.log(ans)