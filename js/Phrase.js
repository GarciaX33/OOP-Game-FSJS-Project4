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

    /**
  * Checks if passed letter is in phrase
  * param (string) letter - Letter to check
  */
  checkLetter(){
    let matched = this;
    let phraseLi = document.getElementById("phrase").getElementsByTagName("li");
    $('.keyrow button').bind('click', function(){
      for (var i = 0; i < phraseLi.length; i++) {
        if ($(this).text() === phraseLi[i].innerHTML) {
          $(this).addClass("phraseLetters");
          phraseLi[i].classList.add("correct");
          matched.showMatchedLetter();
        }
      }
    })
  }

  /**
  * Displays passed letter on screen after a match is found and distingishes itself with the color green for correct
  * param (string) letter - Letter to display
  */
  showMatchedLetter(){
    $('.correct').css('color', 'black');
    $('.correct').css('background-color', 'green');
    $('.correct').css('text-shadow', '4px black');
  };


}
