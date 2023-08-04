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

    let posOne = "";
    let posTwo = "";
    let posThree = "";
    let posFour = "";
    let posFive = "";
    let matches = 0;

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

        if (userGuess.charAt(0) == dailyWord.charAt(0) && posOne == "") {
            posOne = userGuess.charAt(0);
            matches++;
            first.textContent = posOne;
            console.log(posOne);
            letterCheck()
        } else if (userGuess.charAt(1) == dailyWord.charAt(1) && posTwo == "") {
            posTwo = userGuess.charAt(1);
            matches++;
            second.textContent = posTwo;
            console.log(posTwo);
            letterCheck()
        } else if (userGuess.charAt(2) == dailyWord.charAt(2) && posThree == "") {
            posThree = userGuess.charAt(2);
            matches++;
            third.textContent = posThree;
            console.log(posThree);
            letterCheck()
        } else if (userGuess.charAt(3) == dailyWord.charAt(3) && posFour == "") {
            posFour = userGuess.charAt(3);
            matches++;
            fourth.textContent = posFour;
            console.log(posFour);
            letterCheck()
        } else if (userGuess.charAt(4) == dailyWord.charAt(4) && posFive == "") {
            posFive = userGuess.charAt(4);
            matches++;
            fifth.textContent = posFive;
            console.log(posFive);
            letterCheck()
        } else {
            alert(`You got ${matches} exact matching letters!`);
            console.log(matches);
        }
    }
}

button.addEventListener("click", guessWord);
