# Wordle-Clone
Attempting to making a working facsimile of the popular NYT game World. For the purpose of learning javascript. (Personal learning exercise only)

Done:
- create a basic check system that only accepts 5 letter word guesses and indicates a correct guess. 
- Compare each position of the userGuess and dailyWord strings to determine if: 
    1. Any letters are correct in the exact position given.
    2. Any letters match regardless of position.
    3.  If there is a letter match not in the exact position, not to give false positives in the case of duplicate letters.
- Add visual representation of user guesses, each letter having its own box.
    1. Exact matches are now green, and close matches are now orange.
- Non matching letters that have no appearance in the dailyWord will appear correctly in their given position with no color change.
- Each new entered guess will now correctly overwrite the previous guess.
- Add 6 total word fields each with the same functionality as the first.
- Enable each follow up word to be entered into the next field in line.
- Import a 5-letter wordList.
- Use wordList to randomly determine a dailyWord.
- Compare userGuess to wordList to determine validity.
- Add gameOver state to stop further inputs when correct answer is found OR when user runs out of guesses.
- Make index.html class/id naming more efficient.
- Convert bulk of .js file FROM if/else logic statements TO for...loop system.
- Add usage of arrays to use with for...loop to clean up variable saturation.
- Convert HTML gameBoard into a automated function.
- Add a QWERTY button based keyboard:
    1. Make a function to construct the keyBoard.
    2. Make a function to correctly shade letters used in a guess. Same scheme as letter boxes, with addition of a dark gray for incorrect letters.
- Add text field above "Guess a word!" button to display the correct word if all guesses are used and the correct answer is not guessed.

To do:
- Add text input fields to each letter space.
- Replace prompt input system with text input field system.
- Add more/clean up css styling.
- Add "New Game" button OR a TIME based system to reset the game.