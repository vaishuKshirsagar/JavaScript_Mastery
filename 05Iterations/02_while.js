//While
let index = 0
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index+2;
}

//Iterating within array with while
let myArray = ['flash', 'batman', 'superman']
let arr = 0

while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

//Do while
let score = 1
do{
    console.log(`Score is ${score}`);
    score++;
} while(score<= 10)