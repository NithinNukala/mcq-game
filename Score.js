
import React from "react";

function Score({ score, onRestart }) {
  return (
    <div className="score-container">
      <h2>Your Score: {score}</h2>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Score;
