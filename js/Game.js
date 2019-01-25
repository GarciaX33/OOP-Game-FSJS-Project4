/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /** will declare the Game class. **/
class Game {
   /** Game class constructor method. no needed parameters **/
  constructor() {
    this.missed = 0;
   /**  will add 5 new Phrase objects directly in the empty array that was
   originally set as the value of the `phrases` property. **/
    this.phrases = this.phraseArray();

    /**Phrase Object  **/
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
  /** will select and then return a random
  phrase from the array of phrases stored in the Game class’s `phrases` property. **/

  getRandomPhrase(phrases) {
    let randomArrayIndex = [Math.floor(Math.random() * this.phrases.length)];
    let randomArray = this.phrases[randomArrayIndex];
    return randomArray;
  }
  /**
  * Begins game by selecting a random phrase from getRandomPhrase and displaying it to user with addPhraseToDisplay
  */
  startGame() {
    let phraseSelect = new Phrase(this.getRandomPhrase(phrases));
    phraseSelect.addPhraseToDisplay();
  }

  /**
  * Increases the value of the missed property that starts at 0.
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game, if player is out and has reached 5 lost lives,then the gameOver function is called.
  */
  removeLife(){
      let hearts = document.getElementsByClassName('tries');
  		hearts[0].remove();
  		this.missed +=1
  			if (this.missed === 5) {
  				this.gameOver();
  			}
  }

/**
* Displays game over message
* allows user to press button to restart and start a new game
*/
  gameOver(){
    $('#overlay').addClass('lose').show();
    $('#btn__reset').text('Start Game').hide();
    $('#btn__restart').text('try again?').show();
    $('#game-over-message').text('Ran Out Of Lives').show();
    $('#btn__restart').text('New Game?');
  }

/**
* Checks for winning move
* return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin(){
    if ($('.correct').length === $('.letter').length) {
      $('#overlay').removeClass('lose')
      $('#overlay').addClass('win').show();
      $('#btn__reset').text('Start Game').hide();
      $('#game-over-message').text('You Won The Game!').show();
      $('#btn__restart').text('New Game?').show();
    } else {
      return false;
    }
  }
  /**
  * Handles onscreen keyboard button clicks
  * param button - The clicked button element
  */
  handleInteraction(){
      var checkPhrase = new Phrase(this.phrases[0]);
      var pass = this;
      var fail = this;
      checkPhrase.checkLetter();
      $('.keyrow button').bind('click', function() {
      if ($(this).hasClass('phraseLetters')) {
        $(this).css('background-color', 'green');
        pass.checkForWin();
      } else {
        $(this).css('background-color', 'red');
        fail.removeLife();
      }
    })
  }
}
