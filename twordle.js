// import data from './wordList.json';
// console.log(data);

const button = document.querySelector("button");

function guessWord() {
    const userGuess = prompt("Please enter a 5 letter word:", "");
    let dailyWord = "steam";

    if (!/^[a-zA-Z\s]+$/.test(userGuess)) { 
        alert("Please enter a valid word.");
        guessWord()
    } else if (userGuess.length < 5 || userGuess.length > 5) {
        alert("Your word must contain 5 letters.")
        guessWord()
    } else if (userGuess == dailyWord) {
        alert(`${userGuess} is correct!`)
    } else {
        alert("Try again!")
    }
}

button.addEventListener("click", guessWord);
