import { useState } from "react";
import Board from "../board/Board";
import "./Game.css";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentGameState = history[currentMove];

  const setCurrentGameState = (nextState) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextState];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  };

  const resetGame = () => {
    setCurrentMove(0);
    setCurrentPlayer("X");
  };

  const timeTravel = (previousMove) => {
    setCurrentMove(previousMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => timeTravel(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          currentPlayer={currentPlayer}
          currentGameState={currentGameState}
          setCurrentGameState={setCurrentGameState}
          resetGame={resetGame}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
