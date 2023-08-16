import { WORDS } from './wordList.js';

const button = document.querySelector("button");

let guessCount = 0;
let correct = 0;
let gameOver = 0;
let dailyWordSet = WORDS[Math.floor(Math.random() * WORDS.length)];
let dailyWord = dailyWordSet.toLowerCase();
console.log(dailyWord);

function guessWord() {

    const userGuess = prompt("Please enter a 5 letter word:", "").toLowerCase();

    let first;
    let second;
    let third;
    let fourth;
    let fifth;

    let userOne = userGuess.charAt(0);
    let userTwo = userGuess.charAt(1);
    let userThree = userGuess.charAt(2);
    let userFour = userGuess.charAt(3);
    let userFive = userGuess.charAt(4);

    let dailyOne = dailyWord.charAt(0);
    let dailyTwo = dailyWord.charAt(1);
    let dailyThree = dailyWord.charAt(2);
    let dailyFour = dailyWord.charAt(3);
    let dailyFive = dailyWord.charAt(4);

    let posOne = "";
    let posTwo = "";
    let posThree = "";
    let posFour = "";
    let posFive = "";

    let closeOne = "";
    let closeTwo = "";
    let closeThree = "";
    let closeFour = "";
    let closeFive = "";

    let matches = 0;
    let closeMatches = 0;

    let rowNum = "";    
    
    rowSelect()
    
    function rowSelect() {
        if (guessCount == 1) {
            rowNum = "rowTwo";
            letterPosition()
        } else if (guessCount == 2) {
            rowNum = "rowThree";
            letterPosition()
        } else if (guessCount == 3) {
            rowNum = "rowFour";
            letterPosition()
        } else if (guessCount == 4) {
            rowNum = "rowFive";
            letterPosition()
        } else if (guessCount == 5) {
            rowNum = "rowSix";
            letterPosition()
        } else {
            rowNum = "rowOne";
            letterPosition()
        }
        function letterPosition() {
            first = document.querySelector(`.firstLetter.${rowNum}`);
            second = document.querySelector(`.secondLetter.${rowNum}`);
            third = document.querySelector(`.thirdLetter.${rowNum}`);
            fourth = document.querySelector(`.fourthLetter.${rowNum}`);
            fifth = document.querySelector(`.fifthLetter.${rowNum}`);
            validation()
        }
    }

    function validation() {
        if (!/^[a-zA-Z\s]+$/.test(userGuess)) { 
            alert("Please enter a valid word.");
            guessWord()
        } else if (!WORDS.includes(userGuess)) {
            alert("Not a recognized word, please guess again.");
            guessWord()
        } else if (userGuess.length < 5 || userGuess.length > 5) {
            alert("Your word must contain 5 letters.");
            guessWord()
        } else if (userGuess == dailyWord) {
            correct = 1;
            letterCheck()
        } else {
            letterCheck()
        }
    }

    function letterCheck() {

        if (userOne == dailyOne && posOne == "") {
            posOne = userOne;
            dailyOne = "";
            matches++;
            first.textContent = posOne;
            document.getElementById(`${rowNum}-one`).style.backgroundColor = "lime";
            console.log(posOne);
            letterCheck()
        } else if (userTwo == dailyTwo && posTwo == "") {
            posTwo = userTwo;
            dailyTwo = "";
            matches++;
            second.textContent = posTwo;
            document.getElementById(`${rowNum}-two`).style.backgroundColor = "lime";
            console.log(posTwo);
            letterCheck()
        } else if (userThree == dailyThree && posThree == "") {
            posThree = userThree;
            dailyThree = "";
            matches++;
            third.textContent = posThree;
            document.getElementById(`${rowNum}-three`).style.backgroundColor = "lime";
            console.log(posThree);
            letterCheck()
        } else if (userFour == dailyFour && posFour == "") {
            posFour = userFour;
            dailyFour = "";
            matches++;
            fourth.textContent = posFour;
            document.getElementById(`${rowNum}-four`).style.backgroundColor = "lime";
            console.log(posFour);
            letterCheck()
        } else if (userFive == dailyFive && posFive == "") {
            posFive = userFive;
            dailyFive = "";
            matches++;
            fifth.textContent = posFive;
            document.getElementById(`${rowNum}-five`).style.backgroundColor = "lime";
            console.log(posFive);
            letterCheck()
        } else {
            closeMatchCheck()
        }
    }

    function closeMatchCheck() {

        if (posOne == "" && closeOne == "") {
            if (userOne == dailyTwo) {
                dailyTwo = "";
                closeMatchOne()
            } else if (userOne == dailyThree) {
                dailyThree = "";
                closeMatchOne()
            } else if (userOne == dailyFour) {
                dailyFour = "";
                closeMatchOne()
            } else if (userOne == dailyFive) {
                dailyFive = "";
                closeMatchOne()
            } else {
                closeOne = 1;
                closeMatchCheck()
            }
            function closeMatchOne() {
                posOne = userOne;
                closeMatches++;
                first.textContent = posOne;
                document.getElementById(`${rowNum}-one`).style.backgroundColor = "orange";
                console.log(posOne);
                closeMatchCheck()
            }
        } else if (posTwo == "" && closeTwo == "") {
            if (userTwo == dailyOne) {
                dailyOne = "";
                closeMatchTwo()
            } else if (userTwo == dailyThree) {
                dailyThree = "";
                closeMatchTwo()
            } else if (userTwo == dailyFour) {
                dailyFour = "";
                closeMatchTwo()
            } else if (userTwo == dailyFive) {
                dailyFive = "";
                closeMatchTwo()
            } else {
                closeTwo = 1;
                closeMatchCheck()
            }
            function closeMatchTwo() {
                posTwo = userTwo;
                closeMatches++;
                second.textContent = posTwo;
                document.getElementById(`${rowNum}-two`).style.backgroundColor = "orange";
                console.log(posTwo);
                closeMatchCheck()
            }
        } else if (posThree == "" && closeThree == "") {
            if (userThree == dailyOne) {
                dailyOne = "";
                closeMatchThree()
            } else if (userThree == dailyTwo) {
                dailyTwo = "";
                closeMatchThree()
            } else if (userThree == dailyFour) {
                dailyFour = "";
                closeMatchThree()
            } else if (userThree == dailyFive) {
                dailyFive = "";
                closeMatchThree()
            } else {
                closeThree = 1;
                closeMatchCheck()
            }
            function closeMatchThree() {
                posThree = userThree;
                closeMatches++;
                third.textContent = posThree;
                document.getElementById(`${rowNum}-three`).style.backgroundColor = "orange";
                console.log(posThree);
                closeMatchCheck()
            }
        } else if (posFour == "" && closeFour == "") {
            if (userFour == dailyOne) {
                dailyOne= "";
                closeMatchFour()
            } else if (userFour == dailyTwo) {
                dailyTwo = "";
                closeMatchFour()
            } else if (userFour == dailyThree) {
                dailyThree = "";
                closeMatchFour()
            } else if (userFour == dailyFive) {
                dailyFive = "";
                closeMatchFour()
            } else {
                closeFour = 1;
                closeMatchCheck()
            }
            function closeMatchFour() {
                posFour = userFour;
                closeMatches++;
                fourth.textContent = posFour;
                document.getElementById(`${rowNum}-four`).style.backgroundColor = "orange";
                console.log(posFour);
                closeMatchCheck()
            }
        } else if (posFive == "" && closeFive == "") {
            if (userFive == dailyOne) {
                dailyOne = "";
                closeMatchFive()
            } else if (userFive == dailyTwo) {
                dailyTwo = "";
                closeMatchFive()
            } else if (userFive == dailyThree) {
                dailyThree = "";
                closeMatchFive()
            } else if (userFive == dailyFour) {
                dailyFour = "";
                closeMatchFive()
            } else {
                closeFive = 1;
                closeMatchCheck()
            }
            function closeMatchFive() {
                posFive = userFive;
                closeMatches++;
                fifth.textContent = posFive;
                document.getElementById(`${rowNum}-five`).style.backgroundColor = "orange";
                console.log(posFive);
                closeMatchCheck()
            }
        } else {
            noMatchCheck()
        }
    }

    function noMatchCheck() {

        if (posOne == "") {
            posOne = userOne;
            first.textContent = posOne;
            // document.getElementById("one").style.backgroundColor = "lightgray";
            console.log(posOne);
            noMatchCheck()
        } else if (posTwo == "") {
            posTwo = userTwo;
            second.textContent = posTwo;
            // document.getElementById("two").style.backgroundColor = "lightgray";
            console.log(posTwo);
            noMatchCheck()
        } else if (posThree == "") {
            posThree = userThree;
            third.textContent = posThree;
            // document.getElementById("three").style.backgroundColor = "lightgray";
            console.log(posThree);
            noMatchCheck()
        } else if (posFour == "") {
            posFour = userFour;
            fourth.textContent = posFour;
            // document.getElementById("four").style.backgroundColor = "lightgray";
            console.log(posFour);
            noMatchCheck()
        } else if (posFive == "") {
            posFive = userFive;
            fifth.textContent = posFive;
            // document.getElementById("five").style.backgroundColor = "lightgray";
            console.log(posFive);
            noMatchCheck()
        } else {
            guessCount++;
            // alert(guessCount);
            wrapUp()
        }
    }

    function wrapUp() {
        if (correct == 1) {
            alert(`${dailyWord} is correct! Well done!`);
            gameOver = 1;
        } else if (guessCount > 5) {
            alert(`Sorry, but ${dailyWord} was the right answer.`)
            gameOver = 1;
        } else {
            alert(`You got ${matches} exact matches, and ${closeMatches} close matches!`);
            console.log(matches);
            console.log(closeMatches);
        }
    }
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
