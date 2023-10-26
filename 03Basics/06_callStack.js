//Javascript Execution Context

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total= num1+num2
    return total
}

let result1= addNum(val1, val2)
let result2= addNum(10, 2) 

console.log("Total 1: ",result1);
console.log("Total 2: ",result2);

/*
    1. Gloabal Execution Context
    2. Function Execution Context
    3. Eval Execution Context

    { } -> Global Execution - gets allocated in (this)

        -> Memory Creation Phase - Memory allocation       for all the variable 
        val1 -> undefined
        val2 -> undefined
        addnum -> definition
        result1 -> undefined
        result2 -> undefined

        -> Execution Phase - 
        val1 -> 10
        val -> 5
        addNum -> It is a function so there will be new executional context with
            (new variable environment and execution thread)
        Gets deleted after execution completion
*/


//callStack Example
function one(){
    console.log("One");
}
function two(){
    console.log("Two");
}
function three(){
    console.log("Three");
}
one()
two()
three()

/*
    Call Stack
    |             |
    | three()     |
    | two()       |
    | one()       |
    | Gloabal Exec|
    |_____________|
*/