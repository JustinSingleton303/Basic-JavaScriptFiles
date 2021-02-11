/* fizzBuzz0.js 
   we want an array
   with 100 elements
   but we want the
   fizzBuzz to be the 
   same as the 
   original fizzbuzz */

var output = [];

fizzBuzz();

function fizzBuzz(){
    for(var i = 1; i <= 100; i++){
        if(i % 15 === 0){
            output.push("fizzbuzz");
        }
        else if(i % 3 === 0){
            output.push("fizz");
        }
        else if(i % 5 === 0){
            output.push("buzz");
        }
        else{
            output.push(i);
        }
        console.log(output);
    }                                                                             
}