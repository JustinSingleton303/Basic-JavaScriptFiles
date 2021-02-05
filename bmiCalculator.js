// bmiCalculator.js
// a simple program to take height and weight
// as inputs and return a BMI value.
// BMI = [weight(kg)]/[(height(m))^2]

var yourWght = prompt("What is your weight in kg?");
var yourHght = prompt("What is your height in meters?");

console.log("your BMI is " + bmiCalc(yourWght, yourHght));

function bmiCalc(wght, hght){
    var hSqrd = hght*hght;
    var bmi = wght/hSqrd;
    return bmi;
}