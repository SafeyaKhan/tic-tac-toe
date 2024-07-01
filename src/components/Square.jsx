import React, { useState } from "react";

function Square({ value, handleClick }) {
  return (
    <button
      type="button"
      className="btn btn-light btn-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;
