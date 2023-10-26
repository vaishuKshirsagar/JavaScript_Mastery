//Singleton Object: Object using constructor
//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email : "someone@gmail.com",
    fullName : {
        userfullName: {
            firstName: "Vaishnavi",
            lastName: "Kshirsagar"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2,obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4);

//When we are getting values from the database it will be in the form of array
const users = [
    {
        id: 1,
        email: "vk@gmail.com"
    },
    { 
    
    },
    {

    },
]

users[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //It will give values in array datatype
console.log(Object.values(tinderUser)); //It will give values in array datatype
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Object destructuring using curly braces
const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "John"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
console.log(Instructor);

//Json Format sample
// {
//     "myName": "Vaishnavi",
//     "courseName": "JavaScript",
//     "price": "999"
// }

