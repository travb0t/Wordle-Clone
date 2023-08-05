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

    let closeOne = "";
    let closeTwo = "";
    let closeThree = "";
    let closeFour = "";
    let closeFive = "";

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
            dailyOne = "";
            matches++;
            first.textContent = posOne;
            document.getElementById("one").style.backgroundColor = "lime";
            console.log(posOne);
            letterCheck()
        } else if (userTwo == dailyTwo && posTwo == "") {
            posTwo = userTwo;
            dailyTwo = "";
            matches++;
            second.textContent = posTwo;
            document.getElementById("two").style.backgroundColor = "lime";
            console.log(posTwo);
            letterCheck()
        } else if (userThree == dailyThree && posThree == "") {
            posThree = userThree;
            dailyThree = "";
            matches++;
            third.textContent = posThree;
            document.getElementById("three").style.backgroundColor = "lime";
            console.log(posThree);
            letterCheck()
        } else if (userFour == dailyFour && posFour == "") {
            posFour = userFour;
            dailyFour = "";
            matches++;
            fourth.textContent = posFour;
            document.getElementById("four").style.backgroundColor = "lime";
            console.log(posFour);
            letterCheck()
        } else if (userFive == dailyFive && posFive == "") {
            posFive = userFive;
            dailyFive = "";
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
                document.getElementById("one").style.backgroundColor = "orange";
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
                document.getElementById("two").style.backgroundColor = "orange";
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
                document.getElementById("three").style.backgroundColor = "orange";
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
                document.getElementById("four").style.backgroundColor = "orange";
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
                document.getElementById("five").style.backgroundColor = "orange";
                console.log(posFive);
                closeMatchCheck()
            }
        } else {
            console.log("No match check")
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
