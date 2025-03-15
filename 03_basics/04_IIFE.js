//Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
})();
//we use IIFE to avoid global scope pollution

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("kartik")