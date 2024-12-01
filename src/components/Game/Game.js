import React, { useState } from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(() => {
    return Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => ({
      guess: [],
      id: crypto.randomUUID(),
    }));
  });

  function onGuess(guess) {
    const nextGuesses = [...guesses];
    const emptyGuess = nextGuesses.find((g) => g.guess.length === 0);
    if (!emptyGuess) return;
    emptyGuess.guess = checkGuess(guess, answer);
    setGuesses(nextGuesses);
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess) => (
          <Guess key={guess.id} guess={guess.guess} />
        ))}
      </div>
      <GuessInput onGuess={onGuess} />
    </>
  );
}

export default Game;
