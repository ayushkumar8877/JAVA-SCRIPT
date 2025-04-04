// var c = 300
let a = 100
if (true) {
  let a = 10;
  const b = 20;
  // console.log("Inner:",a)
}

// console.log(a);
// console.log(b);
// console.log(c);
 
function one(){
  const username = "ayush"

  function two(){
    const website = "Instagram"
    console.log(username);
  }
  // console.log(website);

  two()
}

// one()

if(true){
  const username = "Ayush"
  if(username === "Ayush"){
    const website = " Instagram"
    // console.log(username + website);
  }
  // console.log(website);
}


//============================== intresting ===========================

console.log(addone(1))
function addone(num) {
  return num + 2
}

addtwo(5)
const addtwo = function(num){
  return num + 2
}