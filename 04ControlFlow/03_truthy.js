const userEmail = "vaishnavi.ai"

if(userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have user email");
}

/*
    Falsy Values ->
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    Truthy Values ->
    "0", 'false', " ", [] -> Empty Array, {} -> Empty Object, function(){}

*/

if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Ternary Operator
// condition ? true : false

const icedTeaPrice = 100
icedTeaPrice <=80 ? console.log("Less than 80"): console.log("Greater than 80");