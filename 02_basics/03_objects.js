// const mySym=Symbol("key1")
// const myObject={
//     name:"kartik",
//     "full name" :"kartik tamhan",
//     age:20,
//     [mySym]:"myKey1"
// }
// console.log(myObject.name);
// console.log(myObject["full name"])
// console.log(myObject[mySym]);
// Object.freeze(myObject)
const JsUser ={
    name : "Kartik",
    mail : "kartik@sbjit.com",
    age : 15
}

JsUser.greeting = function(){
    console.log(`Hello JS User , ${this.name}`);
    
}
console.log(JsUser.greeting());
