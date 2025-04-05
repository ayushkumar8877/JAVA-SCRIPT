const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)


const mytotal = myNums.reduce( (acc, curr) => acc+curr, 10)

// console.log(mytotal);


const shoppingcart = [
    {
        itmename: "js course",
        price: 2999
    },
    {
        itmename: "java course",
        price: 8999
    },
    {
        itmename: "react course",
        price: 10999
    },
    {
        itmename: "python course",
        price: 2499
    },
    {
        itmename: "data science course",
        price: 2999
    },
    {
        itmename: "rust course",
        price: 14999
    }
]

const price = shoppingcart.reduce((acc, item) => acc+item.price, 0)
console.log(price);


