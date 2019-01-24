/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var phrases = [
     "the web app",
     "database",
     "text editor",
     "frameworks",
     "object oriented programming",
     "javascript library"
];

const theGame = new Game(phrases);
/** will hide main overlay once button is clicked  **/
 $('#btn__reset').on('click',
 function(){
    hideOverlay();
  });
/** will hide the main overlay with hideOverlay function  **/
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
