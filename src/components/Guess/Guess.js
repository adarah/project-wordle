import React from "react";

function Guess({ guess }) {
  if (guess.length === 0) {
    guess = Array.from({ length: 5 }).fill({ guess: "" });
  }
  return (
    <p className="guess">
      {guess.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
