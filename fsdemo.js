// jshint esversion:6

const fs = require('fs');

let myDir = fs.readdir("/", (err, data)=>{
  console.log(data);
})
