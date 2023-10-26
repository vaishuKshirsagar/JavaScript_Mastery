function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("U");
}

sayMyName();

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;
// }
function addTwoNumbers(number1, number2){
    return number1 + number2;
}
const result =addTwoNumbers(3,5);
console.log("Result: ",result);



function loginuserMessage(username="Mike"){ //Default value
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in `
}
// console.log(loginuserMessage("Vaishnavi"));
console.log(loginuserMessage()); //Will give undefined


//Rest Operator: Here we have used ... (rest operator) in which all the items will be bundled up in array
function calculateCartPrice(...num1){ 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

//Function with object and an array
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 1000]));