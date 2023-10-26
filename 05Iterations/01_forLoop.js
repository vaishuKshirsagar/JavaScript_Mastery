//For
//Initialization, Condition, Increment/Decrement

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    if (element==5) {
        console.log("5 is the best number");
    }
    console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(i + '*' + j + '=' + i*j);
    }   
}

let myArr= ["Flash", "Batman", "Superman"]
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);   
}

//Break and Continue Keyword
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);

}

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);

}

