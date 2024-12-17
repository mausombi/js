const prompt=require("prompt-sync")();

let a=prompt("Enter your Name");

a=a.slice(0,1).toUpperCase()+a.slice(1,a.length).toLowerCase();

console.log(a);