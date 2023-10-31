//For in can be used to iterate through map
const myObject={
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift:"Swiftby Apple"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming= ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(programming[key]);
}


//Map is not itearatable
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// for(const key in map){
//     console.log(key);
// }