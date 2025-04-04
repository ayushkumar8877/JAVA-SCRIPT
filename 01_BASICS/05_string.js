const name = "ayush"
const repoCount = 10

// console.log(name + repoCount + " value ")

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('ayush-kumar-ritik-roushan')

console.log(gameName[0]);
console.log(gameName.__proto__)


console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(6));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 9)
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "   ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/ayush%20kumar"
console.log(url.replace('%20', '-'))

console.log(url.includes('ritik'))

console.log(gameName.split('-'));



