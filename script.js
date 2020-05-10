(function(){
  var names = ["Sarah", "Jamila", "Jamil", "Jad", "Omar", "Fathi", "Layla", "Omayma", "Lobna", "Joud"];





for ( var i = 0; i < names.length; i++) {
     var firstLetter = names[i].charAt(0).toLowerCase();
     if ( firstLetter == 'j') {
         byeSpeaker.speak(names[i]);
     }    
     else {
   
    helloSpeaker.speak(names[i]);
    }
   }
})();
