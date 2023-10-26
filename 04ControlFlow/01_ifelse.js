//if
//Comparison Operators: <, >, <=, >=, ==, !=, ===

const isUserLoggedIn = true
const temperature = 41

if(temperature<45){
    console.log("Moderate");
} else{
    console.log("Its hot outside")
}

console.log("Execute");

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: $(power)`); //Won't be accessible

// const balance = 1000
// if(balance>500) console.log("test"); //Implicit scope


// if(balance <500){
//     console.log("less than");
// } else if(balance < 750){
//     console.log("Less than 900");
// } else if(balance < 900){
//     console.log("Less than 750");
// } else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}