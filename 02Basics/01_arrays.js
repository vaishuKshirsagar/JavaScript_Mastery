//Array: It is an object which enables storing collection of elements using single varible  
//JavaScript arrays are resizable
//JavaScript array- copy operation creates shallow copy(copy of an object whose properties shares same reference)

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[[0]]);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(0) //Adds element in the beginning
myArr.shift() //Removes first element

console.log(myArr.includes(9))
console.log(myArr.indexOf(6))

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); //Join will bind the array and convert it into string
console.log(typeof newArr);

//slice, splice

//Slice: Returns a copy of section of an array
console.log("A", myArr);

const myn1 = myArr.slice(1, 3) //start from first index to index before last given index (Last range not included)

console.log("B", myArr);
console.log(myn1)

const myn2 = myArr.splice(1, 3) //starts from initial and last index as given (Last range included)
console.log("C", myArr); //Original array gets manipulated by splice
console.log(myn2)

