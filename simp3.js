const prompt = require("prompt-sync")();
const num = prompt("enter the year");
const c = (Number(num));
console.log(typeof(c));

if(c<99){
    var d=(c/10)+1;
    console.log('this is ',d,"century");
}