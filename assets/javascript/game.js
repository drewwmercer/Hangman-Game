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

var termToGuess = terms[Math.floor(Math.random() * terms.length)];

var wrongGuessesLeft = 8;

var correctLettersLeft = termToGuess.length;

var blankSpaces = [];

for (var i = 0; i < termToGuess.length; i++) {
    blankSpaces[i] = "_";
}

blankSpaces.join(" ") // do something with this


console.log(guessesLeft);

var guessesLeft = document.getElementById("guesses-left").innerHTML;

console.log(guessesLeft);



function chooseTerm() {

}


// 1. post
// 2. head
// 3. body
// 4. arm
// 5. arm
// 6. leg 
// 7. leg 
// 8. noose
