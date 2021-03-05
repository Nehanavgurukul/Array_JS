const prompt = require("prompt-sync")();
const num = prompt("enter the year");
const c = (Number(num));
console.log(typeof(c));
// if(c>1900){
if(c%400==0){
    console.log("This is leap year");
}else if(c%100==0){
    console.log("This is a sentuary year");
}else if(c%4==0){
    console.log("This is a sentuary leap year");
}else{
    console.log("This is not leap year");
}
// }else{
//     console.log("there is error");
// }