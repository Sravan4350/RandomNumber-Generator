import { useState } from "react";

const RandomGeneratorApp = () => {
  const generateRandom = () => Math.floor(Math.random() * 100) + 1;
  const [guess, setGuess] = useState("")
  const [randomNumber, setRandomNumber] = useState(generateRandom)
  const [attempts, setAttempts] = useState(0)
  const [message, setMessage] = useState("")
  

  const onChangeInput = (event) => {
    setGuess(event.target.value)
  }

  const handleGuess = () => {
    const number = parseInt(guess)
    if (number>100 || number<1) {
        setMessage("Please enter a number between 1 and 100")
        return
    }
    setAttempts(attempts+1);
    if (number === randomNumber) {
        setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`)
    }
    else if (number < randomNumber) {
        setMessage("Too low! Try again");
    }
    else {
        setMessage("Too high! Try again");
    }
  }

  const resetGame = () => {
    setNumberToGuess(generateRandom());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="random-generator-container">
      <h2 className="random-generator-title">🎲 Random Number Guessing Game</h2>

      <div className="random-generator-input-group">
        <label htmlFor="number-input" className="random-generator-label">
          Enter your guess:
        </label>
        <input
          type="number"
          id="number-input"
          className="random-generator-input"
          placeholder="1–100"
          min="1"
          max="100"
          value={guess}
          onChange={onChangeInput}
        />
      </div>

      <div style={{marginLeft:"35px", gap:"20px"}} className="random-generator-button-group">
        <button className="random-generator-button primary" onClick={handleGuess}>Check</button>
        <button className="random-generator-button danger" onClick={resetGame}>Reset</button>
      </div>

      <p className="random-generator-status">
        🕹️ {message}
      </p>
    </div>
  );
};
export default RandomGeneratorApp;
