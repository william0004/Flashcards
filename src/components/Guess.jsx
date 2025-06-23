import { useEffect, useState } from "react";
import Modal from "./modal";
import Streak from './Streak'
import '../App.css'; 

const Guess = (props) => {
  useEffect(() => {
    if (props.isFlipped) {
      setCurrentStreak(0);
    }
  }, [props.isFlipped]);

  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const handleGuessSubmit = () => {
    if (guess.trim() === "") {
      alert("Please enter a guess.");
      return;
    }
    else if (guess.trim().toLowerCase() === props.answer.trim().toLowerCase()) {
      handelStreak();
      setIsCorrect(true);
      setShowModal(true);
      
      setTimeout(() => setShowModal(false), 1000);
      setGuess("");
      props.next();
    }
    else {
      setCurrentStreak(0);
      setIsCorrect(false);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1000);
    }
  }

  const handelStreak = () => {

    if (isCorrect) {
      setCurrentStreak(currentStreak + 1);
      if (currentStreak + 1 > bestStreak) {
        setBestStreak(currentStreak + 1);
      }
    }
    else {
      setCurrentStreak(1);
    }
  }

  const handelChange = (e) => {
    setGuess(e.target.value);
    setIsCorrect(true);
  }

  return (
    <div className="guess-container">
      {showModal && (
        <div className="modal">
          <Modal isCorrect={isCorrect} />
        </div>
      )}

      <div className='streak'>
        <Streak current={currentStreak} best={bestStreak} />
      </div>
      
      <h2>Make a Guess: </h2>
      <input
        type="text"
        value={guess}
        onChange={handelChange}
        placeholder="Type your guess here..."
        className={`guess-input ${guess && !isCorrect ? 'input-wrong' : '' }`}
      />
      <button
        onClick={handleGuessSubmit}
        className="guess-button"
      >
        Submit
      </button>
    </div>
  )
}

export default Guess;