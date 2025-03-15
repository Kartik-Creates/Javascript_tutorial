// function addTwo(num1,num2){
//     // let result=(num1+num2);
//     return num1+num2
// }

// // console.log(addTwo(3,4))

// function loginUser(username="default"){
//     if(!username){
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }
// loginUser()
// // console.log(loginUser("kartik"));

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400))

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)


const mynewArr=[100,200,30,10]

function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(mynewArr));
