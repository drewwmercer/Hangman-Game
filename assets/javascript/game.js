// valid letters that can be guessed
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// array of terms that can populate the blanks
var terms = ["bootcampspot",
    "javascript",
    "container",
    "github",
    "sublime",
    "console",
    "devtools",
    "bootstrap",
    "react",
    "node",
    "database",
    "mongodb",
    "resume",
    "linkedin",
    "developer",
    "application",
    "certification",
    "chrome",
    "mozilla",
    "heroku",
    "gitlab",
    "jquery"];

// randomly selecting a word from the array
var termToGuess = terms[Math.floor(Math.random() * terms.length)];

var wrongGuessesLeft = 8;

// count the number of wins
var winCounter = 0;

// good guesses left to be guessed
var correctLettersLeft = termToGuess.length;

// make an empty array for blank spaces
var blankSpaces = [];
// set up the blank spaces for the selected word
for (var i = 0; i < termToGuess.length; i++) {
    blankSpaces[i] = "_";
}

blankSpaces.join(" ") // this puts blank spaces between the underscores






console.log(wrongGuessesLeft);

//var guessesLeft = document.getElementById("guesses-left").innerHTML;


// document.getElementById("win-counter").innerHTML = winCounter;


while (correctLettersLeft > 0) {
    var testOne = document.getElementById("something");
    testOne.innerHTML = blankSpaces.join(" ") // this puts blank spaces between the underscores


// test
document.getElementById("guesses-left").innerHTML = wrongGuessesLeft;
}


// 1. post
// 2. head
// 3. body
// 4. arm
// 5. arm
// 6. leg 
// 7. leg 
// 8. noose
