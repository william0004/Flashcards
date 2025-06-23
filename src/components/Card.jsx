import { useState } from 'react'
import '../App.css'

const Card = (props) => {

  return (
    <div className={`flip-card${props.isFlipped ? ' flipped' : ''}`}>
      <div className={`flip-card-inner${props.index < 7 ? ' easy' : (props.index < 14 ? ' medium' : ' hard')}`}>
        <div className="flip-card-front">
          <p>{props.question}</p>
        </div>
        <div className="flip-card-back">
          <p>{props.answer}</p>
        </div>
        <div className='card-img-container'>
          <img src={props.image} alt="card image" className={`card-img${props.image===null ? ' hide': ''}`} />
        </div>
      </div>
    </div>
  );
}

export default Card;