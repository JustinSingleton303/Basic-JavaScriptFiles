/*loveCalculator.js
   This program takes two
   names and then sets the names
   aside to see how compatible 
   the two names are together. */

   //get names from user
var nameOne = prompt("Enter the name of person one.");
var nameTwo = prompt("Enter the name of person two.");

var preRating = Math.random();
var rating = Math.floor(preRating * 100) + 1;

   //sampling output
console.log(preRating + " " + rating);
alert(nameOne + " & " + nameTwo + ", have a " + rating + "% chance to work out")