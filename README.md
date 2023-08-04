# Wordle-Clone
Attempting to making a working facsimile of the popular NYT game World. For the purpose of learning javascript. (Personal learning exercise only)

Done:
- create a basic check system that only accepts 5 letter word guesses and indicates a correct guess. 
- Compare each position of the userGuess and dailyWord strings to determine if: 
    1. Any letters are correct in the exact position given.
    2. Any letters match regardless of position.
- Add visual representation of user guesses, each letter having its own box.
    1. Exact matches are now green, and close matches are now orange.
- Non matching letters that have no appearance in the dailyWord will appear correctly in their given position with no color change.
- Each new entered guess will now correctly overwrite the previous guess.

To do:
- Import a 5-letter wordList.
- Use wordList to randomly determine a dailyWord.
- Compare userGuess to wordList to determine validity.
- Compare each position of the userGuess and dailyWord strings to determine if: 
    3. If there is a letter match not in the exact position, not to give false positives in the case of duplicate letters.