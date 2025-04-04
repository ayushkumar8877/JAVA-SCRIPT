//  array=============

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["Aloo","Matar"]
const myArr2 = new Array(1, 2, 3, 4, 5, 6)

console.log(myArr[3]);


// Array methods====================
// myArr.push(7)
// myArr.push(8)
// myArr.pop()


// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3 )

console.log(myn1);
console.log("B", myArr); 

const myn2 = myArr.splice(1,3 ) // isme pura diya hua range hi ht jata hai
console.log("z", myArr); 
console.log(myn2);

 