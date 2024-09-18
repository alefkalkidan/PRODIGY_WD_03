const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartButton = document.getElementById('restart-btn');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closeBtn = document.querySelector('.close-btn');
const popupRestartBtn = document.getElementById('popup-restart-btn');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

// Game mode selection
let gameMode = '';

document.getElementById('player-vs-player').addEventListener('click', function() {
   gameMode = 'player';
   startGame();
});

document.getElementById('player-vs-computer').addEventListener('click', function() {
   gameMode = 'computer';
   startGame();
});

function startGame() {
   // Hide mode selection and show game board
   document.querySelector('.mode-selection').style.display = 'none';
   document.getElementById('game-board').style.display = 'grid';
   restartButton.style.display = 'block'; // Show restart button
}

// Winning conditions
const winningConditions = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(event) {
   const clickedCell = event.target;
   const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

   if (board[clickedCellIndex] !== '' || !isGameActive) {
       return; // Cell already taken or game is not active
   }

   board[clickedCellIndex] = currentPlayer; // Player makes a move
   clickedCell.innerText = currentPlayer;

   // Add classes to change color
   clickedCell.classList.add(currentPlayer);

   // Check for result after player's move
   checkResult();

   // If game is still active and it's a computer mode
   if (isGameActive && gameMode === 'computer') {
       disableCells(); // Disable player input during computer's turn
       currentPlayer = 'O'; // Switch to computer
       
       // Set a timeout for the computer's move
       setTimeout(() => {
           computerMove();
           checkResult();
           currentPlayer = 'X'; // Switch back to player
           enableCells(); // Re-enable player input after computer's turn
       }, 1000); // Delay of 1000 milliseconds (1 second)
   }
}

function computerMove() {
   // Basic strategy for computer to block or win
   for (let i = 0; i < winningConditions.length; i++) {
       const [a, b, c] = winningConditions[i];
       if (board[a] === 'O' && board[b] === 'O' && board[c] === '') {
           makeMove(c);
           return; // Win
       }
       if (board[a] === 'O' && board[c] === 'O' && board[b] === '') {
           makeMove(b);
           return; // Win
       }
       if (board[b] === 'O' && board[c] === 'O' && board[a] === '') {
           makeMove(a);
           return; // Win
       }
       
       // Block player from winning
       if (board[a] === 'X' && board[b] === 'X' && board[c] === '') {
           makeMove(c);
           return; // Block
       }
       if (board[a] === 'X' && board[c] === 'X' && board[b] === '') {
           makeMove(b);
           return; // Block
       }
       if (board[b] === 'X' && board[c] === 'X' && board[a] === '') {
           makeMove(a);
           return; // Block
       }
   }

   // If no immediate win or block available, choose a random empty cell
   const availableCells = board.map((val, index) => val === '' ? index : null).filter(val => val !== null);
   
   if (availableCells.length > 0) {
       const randomIndex = Math.floor(Math.random() * availableCells.length);
       makeMove(availableCells[randomIndex]);
   }
}

function makeMove(index) {
   board[index] = 'O';
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   
   
   
   
   
   
   
   
   
  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
  

  
 

 
cells[index].innerText = 'O';
    
// Add classes to change color

cells[index].classList.add('O');
}

function checkResult() {
let roundWon = false;

for (let i = 0; i < winningConditions.length; i++) {
const [a, b, c] = winningConditions[i];
if (board[a] === '' || board[b] === '' || board[c] === '') {
continue;

}
if (board[a] === board[b] && board[a] === board[c]) {

roundWon = true;

break;

}
}
if (roundWon) {

statusDisplay.innerText = `Player ${currentPlayer} has won!`;
showPopup(`Congratulations! Player ${currentPlayer} has won!`); // Show popup message for win

isGameActive = false;

return;

}
if (!board.includes('')) {

statusDisplay.innerText = 'It\'s a draw!';
showPopup('It\'s a draw!'); // Show popup message for draw

isGameActive = false;

return;

}
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

}

// Function to show the popup message

function showPopup(message) {

popupMessage.innerText = message; // Set the message in the popup

popup.style.display = "flex"; // Show the popup using flexbox to center it properly

}

// Close the popup when the close button is clicked

closeBtn.onclick = function() {

popup.style.display = "none";

};

// Restart game from popup button

popupRestartBtn.onclick = function() {

restartGame();

};

// Restart game function

function restartGame() {

isGameActive = true;

currentPlayer = 'X';

// Reset the game state

board.fill('');

statusDisplay.innerText = '';

cells.forEach(cell => {

cell.innerText = '';

cell.classList.remove('X', 'O'); // Remove classes for colors on restart

});

popup.style.display = "none"; // Hide the popup when restarting the game

}

// Function to disable all cells during computer's turn

function disableCells() {

cells.forEach(cell => cell.style.pointerEvents = "none");

}

// Function to enable all cells after computer's turn

function enableCells() {

cells.forEach(cell => cell.style.pointerEvents = "auto");

}

// Event Listeners

restartButton.addEventListener('click', restartGame);