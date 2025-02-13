import React from "react";

function GuessRenderer({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {guesses.map(({ guess, id }) => (
          <p key={id} className="guess">
            {guess}
          </p>
        ))}
      </div>
    </div>
  );
}

export default GuessRenderer;
