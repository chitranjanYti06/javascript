const marval_heros = ["thor" , "Ironman" ," spiderman"]
const dc_heroes =["superman" ,"flash","batman"]

// marval_heros.push(dc_heroes)
// console.log(marval_heros[3][1])


const allHeros= marval_heros.concat(dc_heroes)
// console.log(allHeros);

const all_newHeroes= [...marval_heros, ...dc_heroes]

console.log(all_newHeroes)

const another_array = [1, 2, 3, [4, 5, 6], 7 ,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)



console.log(Array.isArray("chitranjan"))
console.log(Array.from("chitranjan"))
console.log(Array.from({name:"hitesh"}))//interesting 


let score1= 100;
let score3= 200;
let score2= 300;

console.log(Array.of(score1,score2,score3))