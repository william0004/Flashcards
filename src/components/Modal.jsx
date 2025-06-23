const Modal = (props) => {

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>{props.isCorrect ? "Great! You got this one!" : "Incorrect! Try Again!"}</h2>
        <img src={props.isCorrect ? '/icons/correct.png' : '/icons/wrong.png'} alt="feedback icon" className="modal-icon" />
      </div>
    </div>
  );
}

export default Modal;