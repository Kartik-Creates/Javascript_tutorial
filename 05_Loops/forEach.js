const coding = ["java","c","python"]

// coding.forEach( function (item){
//     console.log(item);
    
// } )
// coding.forEach((item) => {
//     console.log(item);
    
// });
// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const mycoding=[
    {
        laguageName: "Javascript",
        filename: "js"
    },
    {
        laguageName: "java",
        filename: "java"
    },
    {
        laguageName: "python",
        filename: "py"
    }
]
mycoding.forEach((item)=>{
    console.log(item.laguageName);
    
})