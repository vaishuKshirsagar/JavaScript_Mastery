const goodName = "Vaishnavi"
const repoCount = 50

//console.log(goodName + repoCount + "Value");
console.log(`Hello my name is ${goodName} and my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc-com')


// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4) //will start from 0 index
console.log(anotherString);

const newStringOne = "    vaishnavi   "
console.log(newStringOne);
console.log(newStringOne.trim()); //will remove the spaces

const url = "https://vaishnavi.com/vaishnu%20kshirsagar"
console.log(url.replace('%20','-'));
console.log(url.includes('vaishnavi'));

console.log(gameName.split('-'));