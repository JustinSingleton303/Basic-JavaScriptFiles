/* fibonacci.js 
   constructs an array
   containing the first
   n terms of the 
   Fibonnacci sequence. */

//setuo initial conditions for fibonacci
var fib = [];
fib.push(1);
fib.push(1);

console.log(fib);

var n = prompt("How many fibonacci numbers would you like to see?");

fibonacci(n);

function fibonacci(n){
    for(var i = 2; i < n; i++){
        //var toPush = fibAdd(i);
        var fibNum = fib[i - 1] + fib[i - 2];
        fib.push(fibNum);
        console.log(fib);
    }
}

function fibAdd(a){
    var fibNum = fib.indexOf(a - 1) + fib.indexOf(a - 2);

    console.log(fib);
    return fibNum;
}

