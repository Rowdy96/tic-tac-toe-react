import "./Square.css";
import { useState } from "react";

const Square = ({ value, onChangeValue, disabled }) => {
  return (
    <button className="square" onClick={onChangeValue} disabled={disabled}>
      {value ?? <>&nbsp;</>}
    </button>
  );
};

export default Square;
