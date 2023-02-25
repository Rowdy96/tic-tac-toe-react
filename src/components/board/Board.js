import { useState } from "react";
import BoradRow from "../board-row/BoardRow";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const boardRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const findWinner = (squares) => {
    for (const item of possibleLines) {
      const [a, b, c] = item;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const changeValue = (squareIndex) => {
    if (findWinner(squares) || squares[squareIndex]) {
      return;
    }
    const nextSquares = [...squares];
    nextSquares[squareIndex] = currentPlayer;
    setSquares(nextSquares);
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer("X");
  };

  const winner = findWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + currentPlayer;
  }

  const isDisabled = winner ? true : false;

  return (
    <>
      {boardRows.map((boardRow, index) => (
        <BoradRow
          key={index}
          squares={squares}
          columns={boardRow}
          onSquareClick={changeValue}
          isSquareDisabled={isDisabled}
        />
      ))}
      {status && <h2> {status}</h2>}
      <button onClick={resetGame}>New game</button>
    </>
  );
}

export default Board;
