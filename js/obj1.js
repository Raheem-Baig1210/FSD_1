const { model } = require("mongoose");

var m1={
    brand: "Pineapple",
    model: "p 16",
    color: "Red",
    width: 5,
    height: 10
};
var m2=m1;
m2.color= "Pink"
console.log(m1,m2)