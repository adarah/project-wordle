import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  const copy = [...guesses];
  while (copy.length < NUM_OF_GUESSES_ALLOWED) {
    copy.push({ id: crypto.randomUUID() });
  }

  return (
    <div className="guess-results">
      {copy.map((guess) => (
        <Guess key={guess.id} guess={guess.guess} />
      ))}
    </div>
  );
}

export default GuessResults;
