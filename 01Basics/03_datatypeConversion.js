let score = "33" //Datatype is number
let score1 = "33abc" //Datatype will be NaN (Not a number)

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score) //Javascript will convert string into number
let valueNumber1 = Number(score1) //This string won't convert 
console.log(typeof valueNumber);
console.log(typeof valueNumber1);
console.log(valueNumber);
console.log(valueNumber1);

//"33" => 33
//"33abc" => NaN
//true=> 1; false=> 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0=> false
//"" => false
//"hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
