//Operations on Arrays
const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan", "BatMan", "Flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros); //It took array as a single element
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
 
//Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array =[1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]
const another_new = another_array.flat(Infinity)
console.log(another_new);

console.log(Array.isArray("Vaishnavi"))
console.log(Array.from("Vaishnavi"))
console.log(Array.from({aName:"Vaishnavi"})) //Gives empty array (Have to specify whether to create array from key or value)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))