/* wallBeer.js
   This program is 
   the old 99 bottles
   of beer song in
   javaScript.       */

   var n = 99;

   function beer(){
       while(n > 0){
           console.log(n + " bottles of beer on the wall, " + n 
            + " bottles of beer, take one down, pass it around, "
            + (n - 1) + " bottles of beer on the wall" );
           n--;
       }
   }

   beer();
   console.log("*stumble* ... Tthheres nnooo more beeerzz, b-bro.. he he");
