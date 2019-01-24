/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  /** will declare the Phrase class. **/

class Phrase {
  /** Phrase class constructor method should receive one parameter: `phrase`.**/
  constructor(phrase) {
    this.phrase = phrase;
  }
  /**
  * will Display phrase on game board
  */
  addPhraseToDisplay() {
    let thisPhrase = this.phrase.split('');
    let thisUl = $('#phrase ul');
    for (var i = 0; i < thisPhrase.length; i++) {
      if (thisPhrase[i] === ' ') {
        thisUl.append('<li class = "hide space"> </li>');
      } else {
        thisUl.append(`<li class = "hide letter ${thisPhrase[i]}">${thisPhrase[i]}</li>`);
      }
    }
  }



}
