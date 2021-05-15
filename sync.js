// jshint esverion:6
const fs = require("fs");

let data = fs.readdirSync("/");

console.log("Data: ", data);

console.log("this comes after");
