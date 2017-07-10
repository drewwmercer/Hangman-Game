var winCounter = 0;
var placeholderArray = [];
var prevPlaceholderArray = [];
var blankSpaces = [];
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
var letterGuessed = "";
var correctGuessCount = 0;
var guessesLeft = 8;
var terms = ["bootcampspot", "javascript", "container", "github", "sublime", "console", "devtools", "bootstrap", "react", "node", "database", "mongodb", "resume", "linkedin", "developer", "application", "certification", "chrome", "mozilla", "heroku", "gitlab", "jquery"];

createWord(terms);

document.onkeyup = function (event) {
    console.log("key pressed: ", event.key);
    var letterGuessed = event.key;
    console.log("letter guessed: " + letterGuessed);
    document.getElementById("instruction").innerHTML = "<strong>" + "Good luck!" + "</strong>";
    var keyPress;
    if (typeof event != 'undefined') {
        keyPress = event.keyCode;

        letterGuessed = String.fromCharCode(keyPress).toLowerCase();
        console.log(letterGuessed + " should match the key entered");

        trackLetterGuesses(letterGuessed);

        buildWord(letterGuessed);
    }
    else if (e) {
        keyPress = e.which;
    }
    return false;
};

function createWord(terms) {
    termToGuess = terms[Math.floor(Math.random() * terms.length)];
    console.log(termToGuess);
    blankSpaces = [];
    for (var i = 0; i < termToGuess.length; i++) {
        blankSpaces[i] = "_";
    }
    document.getElementById("blank-spaces").innerHTML = blankSpaces.join(" ");
    //Create placeholder for word in UI.
    createWordPlaceholder(termToGuess);
    return termToGuess;
};

function createWordPlaceholder(termToGuess) {
    var blankSpaces = [];
    for (var i = 0; i < termToGuess.length; i++) {
        blankSpaces[i] = "_";
    }
    document.getElementById("blank-spaces").innerHTML = blankSpaces.join(" ");

    return blankSpaces;
};

function trackLetterGuesses(letterGuessed) {
    for (i = 0; i < lettersGuessed.length; i++) {
        if (letterGuessed == lettersGuessed[i]) {
            return;
        }
    }

    lettersGuessed.push(letterGuessed);
    console.log("LettersGuessed array item: " + lettersGuessed[0]);

    var lettersGuessedString = lettersGuessed.join(", ");
    document.getElementById("incorrect-letters").innerHTML = "Letters you have guessed: " + "<strong>" + lettersGuessedString + "</strong>";
    guessesLeft--;

    document.getElementById("guesses-left").innerHTML = "Number of incorrect guesses remaining: " + "<strong>" + guessesLeft + "</strong>";
    console.log('Guesses left: ' + guessesLeft);

    if (guessesLeft == 0) {
        resetBoard();
    }

    return lettersGuessedString;
};

function buildWord(letterGuessed) {

    if (prevPlaceholderArray.length == 0) {
        placeholderArray = createWordPlaceholder(termToGuess);

    } else {
        placeholderArray = prevPlaceholderArray;
    }

    for (var i = 0; i < termToGuess.length; i++) {
        console.log('Word is ' + termToGuess);
        if (letterGuessed == termToGuess[i]) {
            console.log(letterGuessed + " is in the word at index " + i);
            placeholderArray[i] = letterGuessed;
            guessesLeft++;
        }
    }

    prevPlaceholderArray = placeholderArray;

    placeholder = placeholderArray.join(" ");
    document.getElementById('blank-spaces').innerHTML = placeholder;

    console.log("Placeholder Array length is " + placeholderArray.length);
    console.log("Placeholder split is " + placeholder.split(","));

    var termNeedArray = Array.prototype.slice.call(termToGuess);

    if (placeholder.split(',') === termNeedArray.join(" ")) {
        console.log("Woot");
        winCounter++;
        document.getElementById("win-counter").innerHTML = "Wins: " + "<strong>" + winCounter + "</strong>";
        resetBoard();
    }
};

function resetBoard(blankSpaces) {
    createWord(terms);

    letterGuessed = "";
    prevPlaceholderArray = [];
    placeholderArray = [];
    guessesLeft = 8;
    correctGuessCount = 0;
    lettersGuessed = [];

    document.getElementById('guesses-left').innerHTML = guessesLeft;
    document.getElementById('incorrect-letters').innerHTML = lettersGuessed;
};