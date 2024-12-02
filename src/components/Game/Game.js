import React, { useState } from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameResultBanner from "../GameResultBanner/GameResultBanner";

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

  const numGuesses = guesses.filter((g) => g.guess.length > 0).length;
  const hasWon = guesses.some(
    (g) =>
      g.guess.length > 0 &&
      g.guess.every((letter) => letter.status === "correct")
  );
  const hasLost = numGuesses >= NUM_OF_GUESSES_ALLOWED;
  const win = hasWon ? true : hasLost ? false : undefined;

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess) => (
          <Guess key={guess.id} guess={guess.guess} />
        ))}
      </div>
      <GuessInput onGuess={onGuess} disabled={hasWon || hasLost} />
      <GameResultBanner win={win} numGuesses={numGuesses} answer={answer} />
    </>
  );
}

export default Game;
