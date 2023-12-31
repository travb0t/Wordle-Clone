import { WORDS, KEYS } from './wordList.js';

let correct = 0;
let gameOver = 0;

let guessCount = 0;
let nextLetter = 0;

let dailyWordSet = WORDS[Math.floor(Math.random() * WORDS.length)];
let currentGuess = [];

let letterPos = ["one", "two", "three", "four", "five"];
let rowNum = ["rowOne", "rowTwo", "rowThree", "rowFour", "rowFive", "rowSix"];

let keyboardRowNum = ["first-row", "second-row", "third-row"];

console.log(dailyWordSet);

function initGameBoard() {

    let gameBoard = document.getElementById("lettersColumn");

    for (let i = 0; i < 6; i++) {

        let row = document.createElement("div");
        row.className = "lettersRow";

        for (let j = 0; j < 5; j++) {

            let boxRowSet = rowNum[i];
            let boxLetterSet = letterPos[j];

            let box = document.createElement("div");
            let letter = document.createElement("p");

            box.className = "box";
            box.setAttribute("id",`${boxRowSet}-${boxLetterSet}`);
            letter.className = `${boxRowSet} ${boxLetterSet}`; 

            box.appendChild(letter);
            row.appendChild(box);

        }
        
        gameBoard.appendChild(row);
    }
}

function initKeyBoard() {

    let keyBoard = document.getElementById("keyBoard");
    let keyCount = 10;

    for (let i = 0; i < 3; i++) {

        let keyboardRow = document.createElement("div");
        keyboardRow.className = keyboardRowNum[i];

        if (i > 0) {
            keyCount = 9;
        }

        for (let j = 0; j < keyCount; j++) {

            let k = j;

            if (i == 1) {
                k = j + 10;
            } else if (i == 2) {
                k = j + 19;
            }

            let btn = document.createElement("button") 
            let currentKey = KEYS[k];

            btn.className = "keyboard-button";
            btn.innerHTML = `${currentKey}`

            keyboardRow.appendChild(btn);

        }

        keyBoard.appendChild(keyboardRow);
    }
}

function colorKeys(letter, color) {

    for (const key of document.getElementsByClassName("keyboard-button")) {

        if (key.textContent === letter) {

            let defaultColor = key.style.backgroundColor;

            if (defaultColor === "lime") {
                return;
            }

            if (defaultColor === "orange" && color !== "lime") {
                return;
            }

            key.style.backgroundColor = color;
        }
    }
} 

function guessWord() {

    let userGuess = currentGuess.join("");
    let rightAnswer = Array.from(dailyWordSet);

    let matches = 0;
    let closeMatches = 0;

    function guessCheck() {

        if (!WORDS.includes(userGuess) || userGuess.length != 5) {
            alert("Please enter a valid word.");
            return;
        }

        for (let i = 0; i < 5; i++) {

            let currentRow = rowNum[guessCount];
            let currentLetter = letterPos[i];

            if (currentGuess[i] === rightAnswer[i]) {
                colorKeys(currentGuess[i], "lime");
                currentGuess[i] = "";
                rightAnswer[i] = "#";
                matches++;
                document.getElementById(`${currentRow}-${currentLetter}`).style.backgroundColor = "lime";
            }
        }

        for (let j = 0; j < 5; j++) {

            let currentRow = rowNum[guessCount];
            let currentLetter = letterPos[j];

            for (let k = 0; k < 5; k++) {
                if (currentGuess[j] === rightAnswer[k]) {
                    colorKeys(currentGuess[j], "orange")
                    currentGuess[j] = "";
                    rightAnswer[k] = "#";
                    closeMatches++;
                    document.getElementById(`${currentRow}-${currentLetter}`).style.backgroundColor = "orange";
                } else {
                    colorKeys(currentGuess[j], "darkgray")
                }
            }
        }

        if (userGuess === dailyWordSet) {
            correct = 1;
            wrapUp();
        } else {
            guessCount++;
            wrapUp();
        }

    }

    function wrapUp() {

        currentGuess = [];
        nextLetter = 0;

        if (correct == 1) {
            alert(`${dailyWordSet} is correct! Well done!`);
            gameOver = 1;
        } else if (guessCount > 5) {
            alert(`Sorry, but ${dailyWordSet} was the right answer.`);
            gameOver = 1;
            document.getElementById("correctAnswer").textContent = dailyWordSet;
        } else {
            alert(`You got ${matches} exact matches, and ${closeMatches} close matches!`);
            // console.log(matches);
            // console.log(closeMatches);
        }
    }

    guessCheck()
}

function insertLetter(pressedKey) {

    if (nextLetter === 5) {
        return;
    }
    pressedKey = pressedKey.toLowerCase();

    let currentRow = rowNum[guessCount];
    let currentLetter = letterPos[nextLetter];

    document.querySelector(`.${currentRow}.${currentLetter}`).textContent = pressedKey;
    currentGuess.push(pressedKey);

    nextLetter++;

}

function removeLetter() {

    nextLetter -= 1;

    let currentRow = rowNum[guessCount];
    let currentLetter = letterPos[nextLetter];

    document.querySelector(`.${currentRow}.${currentLetter}`).textContent = "";
    currentGuess.pop();

}

document.addEventListener("keyup", (keyPress) => {

    if (gameOver === 1) {
        return;
    }

    let pressedKey = String(keyPress.key);

    if (pressedKey === "Backspace" && nextLetter !== 0) {
        removeLetter();
        return;
    }

    if (pressedKey === "Enter") {
        guessWord();
        return;
    }

    let foundKey = pressedKey.match(/[a-z]/gi);

    if (!foundKey || foundKey.length > 1) {
        return;
    } else {
        insertLetter(pressedKey);
    }

});

// document.getElementById("keyBoard").addEventListener("click", (keyClick) => {

//     const target = keyClick.target;

// });

initGameBoard();
initKeyBoard();