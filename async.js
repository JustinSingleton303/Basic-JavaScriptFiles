//jshint esversion:6

const fs = require("fs");

function phoneNumber(err, data){
  console.log("Data :", data);
}

fs.readdir("/", phoneNumber);

console.log("this comes next");