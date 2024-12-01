import React, { useState } from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function onGuess(guess) {
    setGuesses((g) => g.concat({ guess, id: crypto.randomUUID() }));
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onGuess={onGuess} />
    </>
  );
}

export default Game;
