// const user ={
//     username:"kartik",
//     price:999, 
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome`);
//         console.log(this);
        
//     }

// }
// user.welcomeMessage()
// user.username="tamhan"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username="kartik"
//     console.log(this.username);
    
// }
// chai()


// const chai =()=>{
//     let username="kartik"
//     console.log(this.username);
    
// }
// chai()
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"kartik"})
console.log(addTwo(5,6));
