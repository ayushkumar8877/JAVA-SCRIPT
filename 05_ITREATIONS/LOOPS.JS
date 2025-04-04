// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
    //    console.log("5 is the best number"); 
    }
    // console.log(element);
   
}  

//  console.log("Ayush")


for (let i = 1; i <= 50; i++) {
    // console.log(`Outer loop value: ${i}`)
    // for (let j = 1; j <= 50; j++) {
    //     // console.log(`inner loop value: ${j}, and inner loop ${i}`);
    //     console.log(i + '*' + j + ' = ' + i*j)
    // } 
}

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// BREAK & COnTINUE

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log("Detected 5")
        // break;
        continue;   
    }
    console.log(`Value of index is ${index}`);
    
}
