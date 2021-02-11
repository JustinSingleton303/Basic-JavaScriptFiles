/*fizzbuzz.js*/

//the program is to go through all numbers 1 to 100 and
//print "fizz" if 3|n and "buzz" if 5|n if both 3 and 5
//divide n, the program is to print "fizzbuzz". If 
//none of those conditions apply, print the number 

for(var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 === 0){
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log(i);   
    }
    
} 