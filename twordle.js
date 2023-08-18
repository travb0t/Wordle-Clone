import { WORDS } from './wordList.js';

const button = document.querySelector("button");

let guessCount = 0;
let correct = 0;
let gameOver = 0;
let dailyWordSet = WORDS[Math.floor(Math.random() * WORDS.length)];
let rightAnswer = Array.from(dailyWordSet);

console.log(dailyWordSet);

function guessWord() {

    const userGuess = prompt("Please enter a 5 letter word:", "").toLowerCase();
    let currentGuess = Array.from(userGuess);

    let letterPos = ["one", "two", "three", "four", "five"];
    let rowNum = ["rowOne", "rowTwo", "rowThree", "rowFour", "rowFive", "rowSix"];

    let matches = 0;
    let closeMatches = 0;

    function guessCheck() {

        if (!WORDS.includes(userGuess) || userGuess.length != 5) {
            alert("Please enter a valid word.");
            return
        }

        for (let i = 0; i < 5; i++) {

            let currentRow = rowNum[guessCount];
            let currentLetter = letterPos[i];
            // console.log(currentRow);
            // console.log(currentLetter);

            document.querySelector(`.${currentRow}.${currentLetter}`).textContent = currentGuess[i];
            // console.log(currentGuess[i]);

            if (currentGuess[i] === rightAnswer[i]) {
                matches++;
                document.getElementById(`${currentRow}-${currentLetter}`).style.backgroundColor = "lime";
            } else if (rightAnswer.includes(currentGuess[i])) {
                closeMatches++;
                document.getElementById(`${currentRow}-${currentLetter}`).style.backgroundColor = "orange";
            } else {
                document.getElementById(`${currentRow}-${currentLetter}`).style.backgroundColor = "lightgray";
            }
   
        }

        if (userGuess === dailyWordSet) {
            correct = 1;
            wrapUp()
        } else {
            guessCount++
            wrapUp()
        }

    }

    function wrapUp() {
        if (correct == 1) {
            alert(`${dailyWordSet} is correct! Well done!`);
            gameOver = 1;
        } else if (guessCount > 5) {
            alert(`Sorry, but ${dailyWordSet} was the right answer.`)
            gameOver = 1;
        } else {
            alert(`You got ${matches} exact matches, and ${closeMatches} close matches!`);
            // console.log(matches);
            // console.log(closeMatches);
        }
    }

    guessCheck()
}

function gameStateCheck() {
    if (gameOver == 0) {
        guessWord()
    } else if (gameOver == 1 && correct == 1) {
        alert("Well played! Come back tomorrow for another word!");
    } else {
        alert("Try again tomorrow!");
    }
}

button.addEventListener("click", gameStateCheck);
