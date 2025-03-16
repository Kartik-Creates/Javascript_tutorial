const nums = [1,2,3,4,5,6,7,8,9,10]
// const newnums=nums.filter((num)=>{
//     return num>4

// })
// console.log(newnums)
const newnums=[]
nums.forEach(item => {
 if (item>4) {
    newnums.push(item)
 }   
});
console.log(newnums);
