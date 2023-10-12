// #Primitive

// 7 types : String, Number, Boolean, null(empty), undefined, 
//Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temp = null
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123') //typeof of symbol will be symbol

console.log(id===anotherId);
const bigNum= 386845886258534987n
console.log(bigNum);

// #Reference (Non Primitve)

// Array, Objects, Functions

const heros = ["IronMan", "CaptainAmerica", "Thor", "Hulk"];
let myObj = { //type of object will be Function
    name: "hitesh",
    age: 22,
}

const myFunction= function(){ //type of function will be objectFunction
    console.log("Hellow world");
}

console.log(typeof bigNumber); //typeof bigInt will be bigInt

//*****************************************************

// Stack memory will be used for(Primitve datatype) 
// Heap memory will be used for(Non Primitve datatype)

let myName = "Vaishnavi"
let nickName = myName
nickName = "Vaishnu"
console.log(myName);
console.log(nickName);

let userOne ={
    email: "vaishnu16@gmail.com",
    upi:"user@ybl"
}

let userTwo =userOne 
userTwo.email = "iam@google.com"

console.log(userOne.email);
console.log(userTwo.email);

