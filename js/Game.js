/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /** will declare the Game class. **/
const phrase = new Phrase('');
class Game {
   /** Game class constructor method doesn’t receive any parameters. **/
  constructor() {
    this.missed = 0;
   /**  will add 5 new Phrase objects directly in the empty array that was
   originally set as the value of the `phrases` property. **/
    this.phrases = this.phraseArray();

    /**Phrase Object **/
    this.activePhrase = null;
  }
//   /**
// * Creates phrases for use in game
// * @return {array} An array of phrases that could be used in the game
// */
  phraseArray() {
    var phrases = [
        "the web app",
        "database",
        "text editor",
        "frameworks",
        "object oriented programming",
        "javascript library"
    ]
    return phrases;
  }
  




}
