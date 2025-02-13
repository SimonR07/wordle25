import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const isWin = guesses.some((word) => word.guess === answer);
  const isLose = guesses.length >= NUM_OF_GUESSES_ALLOWED && !isWin;
  const isRunning = !isWin && !isLose;
  const isGameOver = isWin || isLose;

  function handleGuess(guess) {
    const newGuess = {
      guess,
      id: Math.random(),
    };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
  }
  return (
    <>
      <Guess guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} isRunning={isRunning} />
      {isGameOver && (
        <Banner
          result={isWin ? answer : ""}
          answer={answer}
          attempts={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
