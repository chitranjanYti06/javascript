const name = "chitranjan"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(` hello my name is ${name} and my repocount is ${repoCount}`)//string interpolation using backtics
//another way to declare the string

const gameName = new String('chitr-anjan')
console.log(gameName[0]);
console.log(gameName.__proto__);





console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,5)
console.log(anotherString)

const newStringOne = "  hitesh  "

console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://chitranjan.com/%20kumar"

console.log(url.replace('%20' , '-'))


console.log(url.includes(('kumar')))

console.log(gameName.split('-'))