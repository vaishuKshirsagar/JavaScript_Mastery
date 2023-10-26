//Scope Level and Hoisting
//Nested Scope

function one(){
    const username="Vaishnavi"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); //Will give an error because variable is out of scope
    two()
}
one()

if(true){
    const username = "vaishnavi"
    if(username === "vaishnavi "){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); //Will give an error
}
// console.log(username); //Will give an error

//+++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++
//Hoisting : refers to the process whereby the interpreter appears to move the declaration of functions

console.log(addone(5));
function addone(num){
    return num+1
}

// addTwo(5); //Will give an error
const addTwo = function(num){
    return num + 2
}
