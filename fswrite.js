//jshint esversion:6

const fs = require('fs');

let data = {
  name: "Folgy"
}

fs.writeFile('myData.json', JSON.stringify(data), ()=>{
  console.log("file saved");
});
