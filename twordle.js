// import data from './wordList.json';
// console.log(data);

const button = document.querySelector("button");

function guessWord() {

    const userGuess = prompt("Please enter a 5 letter word:", "").toLowerCase();
    let dailyWord = "Steam".toLowerCase();

    const first = document.querySelector(".firstLetter");
    const second = document.querySelector(".secondLetter");
    const third = document.querySelector(".thirdLetter");
    const fourth = document.querySelector(".fourthLetter");
    const fifth = document.querySelector(".fifthLetter");

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

    let matches = 0;
    let closeMatches = 0;



    if (!/^[a-zA-Z\s]+$/.test(userGuess)) { 
        alert("Please enter a valid word.");
        guessWord()
    } else if (userGuess.length < 5 || userGuess.length > 5) {
        alert("Your word must contain 5 letters.");
        guessWord()
    } else if (userGuess == dailyWord) {
        alert(`${dailyWord} is correct!`);
        letterCheck()
    } else {
        alert("Lets check how many letters match...");
        letterCheck()
    }

    function letterCheck() {

        if (userOne == dailyOne && posOne == "") {
            posOne = userOne;
            matches++;
            first.textContent = posOne;
            document.getElementById("one").style.backgroundColor = "lime";
            console.log(posOne);
            letterCheck()
        } else if (userTwo == dailyTwo && posTwo == "") {
            posTwo = userTwo;
            matches++;
            second.textContent = posTwo;
            document.getElementById("two").style.backgroundColor = "lime";
            console.log(posTwo);
            letterCheck()
        } else if (userThree == dailyThree && posThree == "") {
            posThree = userThree;
            matches++;
            third.textContent = posThree;
            document.getElementById("three").style.backgroundColor = "lime";
            console.log(posThree);
            letterCheck()
        } else if (userFour == dailyFour && posFour == "") {
            posFour = userFour;
            matches++;
            fourth.textContent = posFour;
            document.getElementById("four").style.backgroundColor = "lime";
            console.log(posFour);
            letterCheck()
        } else if (userFive == dailyFive && posFive == "") {
            posFive = userFive;
            matches++;
            fifth.textContent = posFive;
            document.getElementById("five").style.backgroundColor = "lime";
            console.log(posFive);
            letterCheck()
        } else {
            closeMatchCheck()
        }
    }

    function closeMatchCheck() {

        if (posOne == "" && userOne == dailyTwo || posOne == "" && userOne == dailyThree || posOne == "" && userOne == dailyFour || posOne == "" && userOne == dailyFive) {
            posOne = userOne;
            closeMatches++;
            first.textContent = posOne;
            document.getElementById("one").style.backgroundColor = "orange";
            console.log(posOne);
            closeMatchCheck()
        } else if (posTwo == "" && userTwo == dailyTwo || posTwo == "" && userTwo == dailyThree || posTwo == "" && userTwo == dailyFour || posTwo == "" && userTwo == dailyFive) {
            posTwo = userTwo;
            closeMatches++;
            second.textContent = posTwo;
            document.getElementById("two").style.backgroundColor = "orange";
            console.log(posTwo);
            closeMatchCheck()
        } else if (posThree == "" && userThree == dailyTwo || posThree == "" && userThree == dailyThree || posThree == "" && userThree == dailyFour || posThree == "" && userThree == dailyFive) {
            posThree = userThree;
            closeMatches++;
            third.textContent = posThree;
            document.getElementById("three").style.backgroundColor = "orange";
            console.log(posThree);
            closeMatchCheck()
        } else if (posFour == "" && userFour == dailyTwo || posFour == "" && userFour == dailyThree || posFour == "" && userFour == dailyFour || posFour == "" && userFour == dailyFive) {
            posFour = userFour;
            closeMatches++;
            fourth.textContent = posFour;
            document.getElementById("four").style.backgroundColor = "orange";
            console.log(posFour);
            closeMatchCheck()
        } else if (posFive == "" && userFive == dailyTwo || posFive == "" && userFive == dailyThree || posFive == "" && userFive == dailyFour || posFive == "" && userFive == dailyFive) {
            posFive = userFive;
            closeMatches++;
            fifth.textContent = posFive;
            document.getElementById("five").style.backgroundColor = "orange";
            console.log(posFive);
            closeMatchCheck()
        } else {
            noMatchCheck()
        }
    }

    function noMatchCheck() {

        if (posOne == "") {
            posOne = userOne;
            first.textContent = posOne;
            document.getElementById("one").style.backgroundColor = "lightgray";
            console.log(posOne);
            noMatchCheck()
        } else if (posTwo == "") {
            posTwo = userTwo;
            second.textContent = posTwo;
            document.getElementById("two").style.backgroundColor = "lightgray";
            console.log(posTwo);
            noMatchCheck()
        } else if (posThree == "") {
            posThree = userThree;
            third.textContent = posThree;
            document.getElementById("three").style.backgroundColor = "lightgray";
            console.log(posThree);
            noMatchCheck()
        } else if (posFour == "") {
            posFour = userFour;
            fourth.textContent = posFour;
            document.getElementById("four").style.backgroundColor = "lightgray";
            console.log(posFour);
            noMatchCheck()
        } else if (posFive == "") {
            posFive = userFive;
            fifth.textContent = posFive;
            document.getElementById("five").style.backgroundColor = "lightgray";
            console.log(posFive);
            noMatchCheck()
        } else {
            alert(`You got ${matches} exact matches, and ${closeMatches} close matches!`);
            console.log(matches);
            console.log(closeMatches);
        }
    }
}

button.addEventListener("click", guessWord);
