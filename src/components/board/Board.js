import BoradRow from "../board-row/BoardRow";
import { boardRows, findWinner } from "../../utils/utils";
function Board({
  currentGameState,
  setCurrentGameState,
  currentPlayer,
  resetGame,
}) {
  const changeValue = (squareIndex) => {
    if (findWinner(currentGameState) || currentGameState[squareIndex]) {
      return;
    }
    const nextSquares = [...currentGameState];
    nextSquares[squareIndex] = currentPlayer;
    setCurrentGameState(nextSquares);
  };

  const winner = findWinner(currentGameState);

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
          squares={currentGameState}
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
