// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element==5) {
//         console.log("5 is best");
        
//     }
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loop ${j} and inner ${i}`);
        
//     }
    
// }
const myArray = ["flash","batman","superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

//break,continue

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("5 detected");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }
for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log("5 detected");
        continue
    }
    console.log(`Value of i is ${index}`);
    
    
}