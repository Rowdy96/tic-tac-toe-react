import { useState } from "react";
import Square from "../square/Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

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
      <div className="board-row">
        <Square
          value={squares[0]}
          onChangeValue={() => changeValue(0)}
          disabled={isDisabled}
        />
        <Square
          value={squares[1]}
          onChangeValue={() => changeValue(1)}
          disabled={isDisabled}
        />
        <Square
          value={squares[2]}
          onChangeValue={() => changeValue(2)}
          disabled={isDisabled}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onChangeValue={() => changeValue(3)}
          disabled={isDisabled}
        />
        <Square
          value={squares[4]}
          onChangeValue={() => changeValue(4)}
          disabled={isDisabled}
        />
        <Square
          value={squares[5]}
          onChangeValue={() => changeValue(5)}
          disabled={isDisabled}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onChangeValue={() => changeValue(6)}
          disabled={isDisabled}
        />
        <Square
          value={squares[7]}
          onChangeValue={() => changeValue(7)}
          disabled={isDisabled}
        />
        <Square
          value={squares[8]}
          onChangeValue={() => changeValue(8)}
          disabled={isDisabled}
        />
      </div>
      {status && <h2> {status}</h2>}
      <button onClick={resetGame}>New game</button>
    </>
  );
}

export default Board;
