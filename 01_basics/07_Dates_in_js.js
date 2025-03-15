// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof(myDate));
// let myCreateDate = new Date("11-24-2025")
// // console.log(myCreateDate.toDateString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());


let newDate = new Date()
console.log(newDate.getTime())
console.log(newDate.getDay())

 weekDay = newDate.toLocaleDateString("default",{weekday:"long"})
 console.log(weekDay);
 