/* setting up some code to look at a 
   callback function through the
   debugger.                        */

function anotherAddEventListener(typeOfEvent, callback){
    
    var eventOccurred = {
        type: "keydown",
        key: "j",
        duration: 1
    }
    if(eventOccurred.type === typeOfEvent){
        callback(eventOccurred);
    }
}

anotherAddEventListener("keydown", function(event){
    console.log(event);
})


