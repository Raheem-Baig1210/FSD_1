// const { model } = require("mongoose");

var m1={
    brand: "Pineapple",
    model: "p 16",
    color: "Red",
    width: 5,
    height: 10
};
var m2=m1;
m2.color= "Pink" //it changes the value of m1. m2 is just as a reference of m1 . it stores the address of m1
console.log(m1,m2) 