const arr1 = [1, 2, 3, 4]

//0+1+2+3+4
// const initialValue = 0;
// const sumWithInital = arr1.reduce(
//     (accumulator, currentValue) => accumulator +currentValue,
//     initialValue
// );
// console.log(sumWithInital);

const myTotal = arr1.reduce(function(acc, currVal){
    console.log(`acc: ${acc} and currval: ${currVal}`);
    return acc + currVal;
}, 0)

console.log(myTotal);

const Total = arr1.reduce((acc, curr) => acc+curr, 0)
console.log(Total);

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python course",
        price:999
    },
    {
        itemName: "mobile dev course",
        price:5999
    },
    {
        itemName: "data science course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);