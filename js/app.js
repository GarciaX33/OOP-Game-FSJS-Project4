/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 $(document).ready( function(){
 /** will set focus on first textfield name id **/
  $('#btn__restart').hide();
 });



var phrases = [
    "the web app",
    "database",
    "text editor",
    "frameworks",
    "object oriented programming",
    "javascript library"
];

let theGame = new Game(phrases);

/** will hide the main overlay with hideOverlay function with start game method called  **/
function hideOverlay() {
  $('#overlay').hide();
  theGame.startGame();
 }


 // const logPhrase = (phrase) => {
 // console.log(`Phrase - phrase: `, phrases[phrase]);
 // };
 // const game = new Game();
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());
