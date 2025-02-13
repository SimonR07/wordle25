import React from "react";

function Banner({ result, answer, attempts }) {
  if (result === answer) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {attempts} {attempts === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </div>
    );
  }

  if (attempts >= 6) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return null; // Ne rien afficher si la partie est en cours
}

export default Banner;
