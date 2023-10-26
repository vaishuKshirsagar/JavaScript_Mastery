const user = {
    username: "vaishnavi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// function task(){
//     let username = "Vaishu"
//     console.group(this.username); //Will give undefined becuase we can not use this inside the function can be used in object
// }
// task()

// const chai = () => {
//     let username = "Vaishu"
//     console.log(this); //Will give undefined
// }
//chai()

//+++++++++++++++++++++Arrow function+++++++++++++++++++++

const addTwo = (num1, num2) => {
    return num1 + num2
}

//Can also be written as:
// const addThree = (num1, num2) => num1 + num2
// const addThree = (num1, num2) => (num1 + num2)

const addFour = (name) => ({username: name})
console.log(addTwo(3, 4));
console.log(addFour("Vaishna"));

