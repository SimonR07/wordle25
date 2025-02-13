import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// import GuessRenderer from "../GuessRenderer/GuessRenderer";
import { range } from "../../utils"; // ✅ Import de la fonction range
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
          const newGuess = guesses[i]?.guess || "";
          const result = checkGuess(newGuess, answer);
          return (
            <p key={i} className="guess">
              {range(5).map((j) => (
                <span
                  key={j}
                  className={result ? `cell ${result[j]?.status}` : "cell"}
                >
                  {newGuess[j] || ""}
                </span>
              ))}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Guess;
