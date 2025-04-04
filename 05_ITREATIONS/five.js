const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val){
//     console.log(val); 
// })

// coding.forEach((val) => {
//     console.log(val);
    
// }) 

// function ptintMe(item){
//     console.log(item);
// }
// coding.forEach(ptintMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const mycoding = [
    {
        langaugeName: "javascript",
        langaugeFileName: "js"  
      },
      {
        langaugeName: "python",
        langaugeFileName: "py"  
      },
      {
        langaugeName: "java",
        langaugeFileName: "java"  
      },
      {
        langaugeName: "c++",
        langaugeFileName: "cpp"  
      }
]

mycoding.forEach( (item) => {
    console.log(item.langaugeName);
    
})
