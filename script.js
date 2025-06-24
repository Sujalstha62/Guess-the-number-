// Get elements
let range = document.getElementById('range');
let insult = document.getElementById('insult');
let buttonEnter = document.getElementById('buttonEnter'); 
const modal = document.getElementById('gameOverModal');
const winModal = document.getElementById('winGameModal');
const newGameButtonMain = document.getElementById('newGameButtonMain'); 
const newGameButtonModal = document.getElementById('newGameButtonModal');
const newGameButtonWin = document.getElementById('newGameButtonWin');
let remain = document.getElementById('remain');
let left;  // Lives will be set based on difficulty
let rvalue = Math.floor(Math.random() * 101);
const insultt = ['Idiot', 'Oops', 'Try more', 'Come onnn', 'Stupid', 'Lol', 'Are you serious'];

const difficultySelectionDiv = document.getElementById('difficultySelection');
const gameSectionDiv = document.getElementById('gameSection');
const easyButton = document.getElementById('easyButton');
const normalButton = document.getElementById('normalButton');
const hardButton = document.getElementById('hardButton');

// Show the difficulty selection screen and hide the game
difficultySelectionDiv.style.display = 'block';
gameSectionDiv.style.display = 'none';

// Start the game based on the selected difficulty
easyButton.addEventListener('click', function () {
    startGame(10); // Easy difficulty
});

normalButton.addEventListener('click', function () {
    startGame(5); // Normal difficulty
});

hardButton.addEventListener('click', function () {
    startGame(3); // Hard difficulty
});

// Function to start the game with the chosen difficulty
function startGame(difficulty) {
    left = difficulty; // Set lives based on difficulty
    remain.textContent = left; // Display the lives
    rvalue = Math.floor(Math.random() * 101); // Generate a new random number

    // Hide difficulty selection and show the game
    difficultySelectionDiv.style.display = 'none';
    gameSectionDiv.style.display = 'block';
}
remain.textContent = left;
// Enter button logic
buttonEnter.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission if inside a form
    let insultn = Math.floor(Math.random() * insultt.length);
    let insults = insultt[insultn];
    let input = parseInt(document.getElementById('input').value);
    if (left > 0) {
        

        if (isNaN(input)) {
            insult.textContent = insults;
            range.textContent = 'Enter a valid number';
            return;
        } else if (input > rvalue) {
            insult.textContent = insults;
            range.textContent = 'Guess lower';
            left--;
        } else if (input < rvalue) {
            insult.textContent = insults;
            range.textContent = 'Guess higher';
            left--;
        } else {
            winGame(); // If guessed correctly, show win modal
        }
        remain.textContent = left;
    } else {
        showGameOverModal(); // If no lives left, show game over modal
    }
});

// Function to show the "Game Over" modal
function showGameOverModal() {
    modal.style.display = 'flex';
}

// Function to show the "Congratulations" modal
function winGame() {
    winModal.style.display = 'flex'; // Show the winning modal
}

// New Game buttons to reset the game
newGameButtonMain.addEventListener('click', function () {
    resetGame();
});

newGameButtonModal.addEventListener('click', function () {
    resetGame();
});

newGameButtonWin.addEventListener('click', function () {
    resetGame();
});

// Function to reset the game
function resetGame() {
    // Clear input field
    document.getElementById('input').value = '';

    // Show difficulty selection and hide the game section
    difficultySelectionDiv.style.display = 'block';
    gameSectionDiv.style.display = 'none';
    modal.style.display = 'none'; // Hide the game over modal
    winModal.style.display = 'none'; // Hide the win modal
}
