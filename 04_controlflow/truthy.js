const userEmail = "k@gmail.com"
if(userEmail){
    console.log("got the user email");;
    
}else{
    console.log("dont have email");
    
}
//falsy false,0,-0,BigInt,"",null.NaN,undefined
//truthy "0","false"," ",[],{},function(){}

//Nullish Coalescing Operator (??):null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1=null ?? 10 ?? 20




console.log(val1);

//Ternary 
const iceatea = 100
iceatea<=80 ? console.log("less than 80") : console.log("more than 80");

