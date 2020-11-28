
(function(window) {
    var byeSpeaker = {};
    byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    }
    var speakWord = "Goodbye";
    window.byeSpeaker = byeSpeaker;
  }(window));








