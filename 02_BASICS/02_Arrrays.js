const marvel_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["superman", "flash", "batman"]

//  
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]); 

//  const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] //spread method call
console.log(all_new_heros);

const another_Array = [1, 2, 3, [4, 5, 6,],7, [6, 7, [4, 5]]] 

const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Ayush"))
console.log(Array.from("my name is ayush kumar"))
console.log(Array.from({name: "Ayush"}))  // intresting


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500

console.log(Array.of(score1, score2, score3, score4, score5));
