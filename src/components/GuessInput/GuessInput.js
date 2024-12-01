import React, { useState } from "react";

function GuessInput({ onGuess }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
