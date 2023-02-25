import Square from "../square/Square";

function BoradRow({ squares, columns, onSquareClick, isSquareDisabled }) {
  return (
    <div className="board-row">
      {columns.map((index) => (
        <Square
          key={index}
          value={squares[index]}
          onChangeValue={() => onSquareClick(index)}
          disabled={isSquareDisabled}
        />
      ))}
    </div>
  );
}

export default BoradRow;
