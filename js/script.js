

//(function doSomething() {

//})()

//(function () {

//var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//(function (window) {
  //var yaakovGreeter = {};
  //yaakovGreeter.name = "Yaakov";
  //var greeting = "Hello ";
  //yaakovGreeter.sayHello = function () {
   // console.log(greeting + yaakovGreeter.name);
  //}

  //window.yaakovGreeter = yaakovGreeter;

//})(window);

(function (window) {
var helloSpeaker = {};
helloSpeaker.name = "Yaakov";

var speakWord="Hello";
helloSpeaker.sayHello=function speak(name) {
	console.log (speakWord + helloSpeaker.name);
}

window.helloSpeaker=helloSpeaker;

}) (window);