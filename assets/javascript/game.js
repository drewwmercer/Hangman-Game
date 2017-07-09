// valid letters that can be guessed
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// array of terms that can populate the blanks
var terms = ["bootcampspot", "javascript", "container", "github", "sublime", "console", "devtools", "bootstrap", "react", "node", "database", "mongodb", "resume", "linkedin", "developer", "application", "certification", "chrome", "mozilla", "heroku", "gitlab", "jquery"];

// default remaining wrong guesses
var wrongGuessesLeft = 8;

var correctLettersLeft;

var letterGuessed;

var lettersAlreadyGuessed;

// count the number of wins and put it on the page
var winCounter = 0;
document.getElementById("win-counter").innerHTML = winCounter;


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
    // console.log(wrongGuessesLeft);

    document.getElementById("blank-spaces").innerHTML = blankSpaces.join(" ");

    document.getElementById("guesses-left").innerHTML = "Number of incorrect guesses remaining: " + wrongGuessesLeft;

    var blankSpaces = correctLettersLeft;
}

gameLayout();

function gamePlay(event) {
    
    //var letterGuessed.textContent = event.key;

    if (correctLettersLeft > 0 && wrongGuessesLeft > 0) {
        // var testOne = document.getElementById("blank-spaces");
        // testOne.innerHTML = blankSpaces.join(" ") // this puts blank spaces between the underscores

       document.onkeyup = function (event) {
           var letterGuessed = event.key;
       }
          //  document.getElementById("incorrect-letters").append(letterGuessed)
        //}
        console.log(letterGuessed); // take me out later
        for (var j = 0; j < termToGuess.length; j++) {
            if (termToGuess[j] === letterGuessed) {
                blankSpaces[j] = letterGuessed;
                correctLettersLeft--;
            }
        }

            lettersAlreadyGuessed.push(letterGuessed);
            console.log("letters already guessed: " + lettersAlreadyGuessed);

            // test
            document.getElementById("guesses-left").innerHTML = wrongGuessesLeft;
        }

    }

gamePlay(event);

// 1. post
// 2. head
// 3. body
// 4. arm
// 5. arm
// 6. leg 
// 7. leg 
// 8. noose
