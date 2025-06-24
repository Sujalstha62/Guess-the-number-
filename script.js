let range = document.getElementById('range');
let insult = document.getElementById('insult');
let button = document.getElementById('button');
const modal = document.getElementById('gameOverModal');
const newGameButtonMain = document.getElementById('newGameButtonMain'); 
const newGameButtonModal = document.getElementById('newGameButtonModal');
let remain = document.getElementById('remain');
let left = 10;
remain.textContent = left;
let rvalue = Math.floor(Math.random() * 101);
const insultt = ['Idiot', 'Oops', 'Try more', 'Come onnn', 'Stupid', 'Lol', 'Are you serious'];

button.addEventListener('click', function () {
    let insultn = Math.floor(Math.random() * insultt.length);
    let insults = insultt[insultn];
    let input = parseInt(document.getElementById('input').value);

    if (left > 0) {
        left--;
        remain.textContent = left;

        if (isNaN(input)) {
            insult.textContent = insults;
            range.textContent = 'Enter a valid number';
            return;
        } else if (input > rvalue) {
            insult.textContent = insults;
            range.textContent = 'Guess lower';
        } else if (input < rvalue) {
            insult.textContent = insults;
            range.textContent = 'Guess higher';
        } else {
            insult.textContent = "";
            range.textContent = 'Correct';
        }
    } else {
        showGameOverModal();
    }
});


function showGameOverModal() {
    modal.style.display = 'flex';
}


newGameButtonMain.addEventListener('click', function () {
    resetGame();
});


newGameButtonModal.addEventListener('click', function () {
    resetGame();
});


function resetGame() {
    left = 10;
    remain.textContent = left;
    document.getElementById('input').value = '';
    insult.textContent = 'Less do it';
    range.textContent = 'Range 0-100';
    rvalue = Math.floor(Math.random() * 101);
    modal.style.display = 'none';
}
