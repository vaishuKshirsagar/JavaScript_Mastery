//Objects can be declared as 1] Litearal 2] Constructor
//Singleton: When object is created from constructor
//Object.create - Constructor method (Singleton)

//Object Literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Vaishnavi",
    "fullName":"V Kshirsagar",
    [mySymbol]:"myKey", //Use square bracket to use symbol as a key in object
    age: 20,
    location: "Pune",
    email:"vaishu@dev.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySymbol]); //Access of symbol should be done using square brackets

JsUser.email = "vaishu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "vaishu@notion.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greet = function(){
    console.log(`Aloha, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greet());