//HELP SCREEN
playSound("assets/Undertale-OST_-025---Dating-Start!.mp3", false);
onEvent("start_helpButton", "click", function( ) {
  setScreen("help_screen");
});
onEvent("help_back", "click", function( ) {
  setScreen("start_screen");
});
//secretMode
onEvent("secretmode", "click", function( ) {
setScreen ("PLAYDATE")
stopSound("assets/Undertale-OST_-025---Dating-Start!.mp3");
playSound("Careless-Whisper-(only-the-good-part).mp3", timedLoop(10000000));



//groove passloop  
});
//PASS LOOP
onEvent("start_startButton", "click", function( ) {
  setScreen("bulbasaur_screen");
});
onEvent("bulbasaur_pass", "click", function( ) {
  setScreen("charmander_screen");
});
onEvent("charmander_pass", "click", function( ) {
  setScreen("squirtle_screen");
});
onEvent("squirtle_pass", "click", function( ) {
  setScreen("bulbasaur_screen");
});
//BULBASAUR
onEvent("bulbasaur_catch", "click", function( ) {
  setScreen("bulbasaurInfo_screen");
});
onEvent("bulbasaurInfo_finish", "click", function( ) {
  setScreen("start_screen");
});
onEvent("bulbasaurInfo_next", "click", function( ) {
  setScreen("charmander_screen");
});
//CHARMANDER
onEvent("charmander_catch", "click", function( ) {
  setScreen("charmanderinfo_screen");
});
onEvent("charmanderinfo_finish", "click", function( ) {
  setScreen("start_screen");
});
onEvent("charmanderinfo_next", "click", function( ) {
  setScreen("squirtle_screen");
});
//SQUIRTLE 
onEvent("squirtle_catch", "click", function( ) {
  setScreen("squirtleinfo_screen");
});
onEvent("squirtleinfo_finish", "click", function( ) {
  setScreen("start_screen");
});
onEvent("squirtleinfo_next", "click", function( ) {
  setScreen("bulbasaur_screen");
});
onEvent("secretmode", "click", function( ) {
	console.log("secretmode clicked!");
});
//
onEvent("groove", "click", function( ) {
setScreen("screen3");
  
});
//STOP
onEvent("poke1", "click", function( ) {
setScreen("stop");
stopSound("Careless-Whisper-(only-the-good-part).mp3");
playSound("assets/police.mp3")
});
onEvent("poke2", "click", function( ) {
setScreen("stop");
stopSound("Careless-Whisper-(only-the-good-part).mp3");
playSound("assets/police.mp3")
});
onEvent("poke3", "click", function( ) {
setScreen("stop");
stopSound("Careless-Whisper-(only-the-good-part).mp3");
playSound("assets/police.mp3")
});

