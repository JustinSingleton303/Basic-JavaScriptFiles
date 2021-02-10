/* whoPays.js 
   Author: Justin Singleton
   This program chooses at
   random who will pick up
   the tab for lunch out of
   a group of people .     */

    // we will use dummy input just to test the basic algorithm
    // we will add an a user interface that asks how many people
    // are in the party and prompt to enter each person's name
    // so group will be filled with the names given by the user
    // when the app first starts up.
   var group = ["Squelchy", "Thomas", "Zaney", "Chaz", "Ms Torso"];
   var indxNum = Math.floor(Math.random() * group.length);
   console.log(indxNum);
   alert(group[indxNum] + " has the honor of paying today.");
