//Immediately Invoked Function Expression

(function coffee(){
    //Named IIFE
    console.log("DB connnected")
})();

( (name) => {
    console.log(`DB ${name} connected`)
})('Vaishnavi')