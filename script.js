'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameEnded = false;

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (cell.textContent !== '' || gameEnded) return;

        cell.textContent = currentPlayer;
        cell.style.backgroundColor = currentPlayer === 'X' ? '#fca311' : '#14213d';

        if (checkWin()) {
          alert('Player ' + currentPlayer + ' wins!');
          gameEnded = true;
          return;
        }

        if (checkDraw()) {
          alert('It\'s a draw!');
          gameEnded = true;
          return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      });
    });

    function checkWin() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
          return true;
        }
      }

      return false;
    }

    function checkDraw() {
      return Array.from(cells).every(cell => cell.textContent !== '');
    }
  });