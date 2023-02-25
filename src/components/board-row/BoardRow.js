import Square from "../square/Square";

function BoradRow() {
  return (
    <div className="board-row">
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
    </div>
  );
}

export default BoradRow;
