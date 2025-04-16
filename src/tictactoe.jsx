import { useState } from "react";
import "./tictiactoe.css";
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const calculateWinner = (board) => {
    const WinningPositons = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of WinningPositons) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const winner = calculateWinner(board);
  const currentPlayer = isXNext ? "X" : "O";
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square)) {
    status = "Game ended in a draw!";
  } else {
    status = `Next Player: ${currentPlayer}`;
  }
  const resetgame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
  return (
    <div className="game">
      <h2>Tic Tac Toe</h2>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)}>
            {value}
          </Square>
        ))}
      </div>
      {(winner || !board.includes(null)) && (
        <button className="reset" onClick={resetgame}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
