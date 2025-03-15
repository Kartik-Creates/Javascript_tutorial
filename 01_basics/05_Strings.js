const name ="kartik"
const repocount = 50
// console.log(name + repocount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gameName = new String("Kartik-tamhan-jaywant")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringone="    kartik    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://google.com//kartik%20tamhan"
console.log(url.replace("%20","-"));

console.log(url.includes("kartik"));
 
console.log(gameName.split("-"));
