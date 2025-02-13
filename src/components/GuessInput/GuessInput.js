import React from "react";

function GuessInput({ handleGuess, isRunning }) {
  const [guess, setGuess] = React.useState("");
  return (
    <div>
      <form
        onSubmit={(event) => {
          if (guess.length < 5) {
            alert("Your guess must be exactly 5 letters!");
            setGuess("");

            return; // ⛔ Ne soumet pas le formulaire si la condition est remplie
          }

          event.preventDefault();
          handleGuess(guess);
          console.log({ guess });
          setGuess("");
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          disabled={!isRunning}
          minLength={5}
          maxLength={5}
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessInput;
