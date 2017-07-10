// valid letters that can be guessed
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// array of terms that can populate the blanks
var terms = ["bootcampspot", "javascript", "container", "github", "sublime", "console", "devtools", "bootstrap", "react", "node", "database", "mongodb", "resume", "linkedin", "developer", "application", "certification", "chrome", "mozilla", "heroku", "gitlab", "jquery"];

// defining variables
var wrongGuessesLeft = 8;  // default remaining wrong guesses
var correctLettersLeft;
var letterGuessed;
var lettersAlreadyGuessed = [];  // empty array to show the letters pressed already
var winCounter = 0;  // count the number of wins and put it on the page
var termToGuess;
var blankSpaces = [];

// ** testing

// var termToGuess = terms[Math.floor(Math.random() * terms.length)];
// var blankSpaces = [];
// for (var i = 0; i < termToGuess.length; i++) {
//         blankSpaces[i] = "_";
//     }
// var correctLettersLeft = termToGuess.length;

// document.getElementById("win-counter").innerHTML = "Wins: " + "<strong>" + winCounter + "</strong>";
// document.getElementById("blank-spaces").innerHTML = blankSpaces.join(" ");
// document.getElementById("guesses-left").innerHTML = "Number of incorrect guesses remaining: " + "<strong>" + wrongGuessesLeft + "</strong>";

// while (correctLettersLeft > 0) {
//     document.getElementById("blank-spaces").innerHTML = blankSpaces.join(" ");
// }

// ** testing

function gameLoad() {
    termToGuess = terms[Math.floor(Math.random() * terms.length)];
    blankSpaces = [];
    for (var i = 0; i < termToGuess.length; i++) {
        blankSpaces[i] = "_";
    }
    document.getElementById("blank-spaces").innerHTML = blankSpaces.join(" ");

document.onkeyup = function () {
            document.getElementById("instruction").innerHTML = "<strong>" + "Good luck!" + "</strong>";
            var letterGuessed = event.key;
            console.log("letter guessed: " + letterGuessed);
            lettersAlreadyGuessed.push(letterGuessed);
            if (letterGuessed.indexOf(validLetters) > -1) {
                for (var j = 0; j < termToGuess.length; j++) {
                    if (letterGuessed === termToGuess[i]) {
                        blankSpaces[j] = letterGuessed;
                        correctLettersLeft--;
                    }
                    if (letterGuessed !== termToGuess[j]) {
                        wrongGuessesLeft--;
                    }
                }

            }
            document.getElementById("incorrect-letters").innerHTML = "Letters you have guessed: " + "<strong>" + lettersAlreadyGuessed + "</strong>";

        }

}
gameLoad();


function gamePlay() {
      document.onkeyup = function () {
            document.getElementById("instruction").innerHTML = "<strong>" + "Good luck!" + "</strong>";
            var letterGuessed = event.key;
            console.log("letter guessed: " + letterGuessed);
            lettersAlreadyGuessed.push(letterGuessed);
            if (letterGuessed.indexOf(validLetters) > -1) {
                for (var j = 0; j < termToGuess.length; j++) {
                    if (letterGuessed === termToGuess[i]) {
                        blankSpaces[j] = letterGuessed;
                        correctLettersLeft--;
                    }
                    if (letterGuessed !== termToGuess[j]) {
                        wrongGuessesLeft--;
                    }
                }

            }
            document.getElementById("incorrect-letters").innerHTML = "Letters you have guessed: " + "<strong>" + lettersAlreadyGuessed + "</strong>";

        }
        // }
        //lettersAlreadyGuessed = lettersAlreadyGuessed.push(letterGuessed);
    }
//gamePlay();




function gameLayout() {

    // randomly selecting a word from the terms array
    var termToGuess = terms[Math.floor(Math.random() * terms.length)];
    console.log("term: " + termToGuess);
    // correct guesses left to be guessed
    var correctLettersLeft = termToGuess.length;
    console.log("letters left: " + correctLettersLeft);
    // make an empty array for blank spaces
    var blankSpaces = [];
    // set up the blank spaces for the selected word
    for (var i = 0; i < termToGuess.length; i++) {
        blankSpaces[i] = "_";
    }
    console.log("blank spaces: " + blankSpaces.join(" "));

    document.getElementById("win-counter").innerHTML = "Wins: " + "<strong>" + winCounter + "</strong>";
    document.getElementById("blank-spaces").innerHTML = blankSpaces.join(" ");
    document.getElementById("guesses-left").innerHTML = "Number of incorrect guesses remaining: " + "<strong>" + wrongGuessesLeft + "</strong>";

    var blankSpaces = correctLettersLeft;

    function playerMove() {
        document.onkeyup = function () {
            document.getElementById("instruction").innerHTML = "<strong>" + "Good luck!" + "</strong>";
            var letterGuessed = event.key;
            console.log("letter guessed: " + letterGuessed);
            lettersAlreadyGuessed.push(letterGuessed);
            if (letterGuessed.indexOf(validLetters) > -1) {
                for (var j = 0; j < termToGuess.length; j++) {
                    if (letterGuessed === termToGuess[i]) {
                        blankSpaces[j] = letterGuessed;
                        correctLettersLeft--;
                    }
                    if (letterGuessed !== termToGuess[j]) {
                        wrongGuessesLeft--;
                    }
                }

            }
            document.getElementById("incorrect-letters").innerHTML = "Letters you have guessed: " + "<strong>" + lettersAlreadyGuessed + "</strong>";

        }
        // }
        //lettersAlreadyGuessed = lettersAlreadyGuessed.push(letterGuessed);
    }
    // playerMove();

    function checkGuess() {
        for (var j = 0; j < termToGuess.length; j++) {
            if (letterGuessed === termToGuess[j]) {
                blankSpaces[j] = letterGuessed;
                correctLettersLeft--;
            }
            if (letterGuessed !== termToGuess[j]) {
                wrongGuessesLeft--;
            }
            if (correctLettersLeft === 0) {
                winCounter++;
            }

            document.getElementById("incorrect-letters").innerHTML = "Letters you have guessed: " + "<strong>" + lettersAlreadyGuessed + "</strong>";
        }
    }
   // checkGuess();
}
//gameLayout();  // calling the function above

// need loss
// need win
// if (correctLettersLeft > 0 && wrongGuessesLeft > 0) {  // word hasn't been completed and not out of guesses

// function gamePlay(event) {

// if (correctLettersLeft > 0 && wrongGuessesLeft > 0) {
// var testOne = document.getElementById("blank-spaces");
// testOne.innerHTML = blankSpaces.join(" ") // this puts blank spaces between the underscores

//}
// console.log(letterGuessed); // take me out later
// for (var j = 0; j < termToGuess.length; j++) {
//     if (termToGuess[j] === letterGuessed) {
//         blankSpaces[j] = letterGuessed;
//         correctLettersLeft--;
//     }
// }

// document.getElementById("guesses-left").innerHTML = wrongGuessesLeft;
        // }
// gamePlay(event);

// How to hang: 1. post, 2. head, 3. body, 4. arm, 5. arm, 6. leg, 7. leg, 8. noose