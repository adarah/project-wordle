import React from "react";
function GameResultBanner({ win, numGuesses, answer }) {
  if (win === undefined) return null;

  return (
    <>
      {win ? (
        <WinBanner numGuesses={numGuesses} />
      ) : (
        <LoseBanner answer={answer} />
      )}
    </>
  );
}

function WinBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  );
}

function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameResultBanner;
