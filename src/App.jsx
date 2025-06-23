import { useState } from 'react'
import Guess from './components/Guess'
import Card from './components/Card'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(null);
  const [isRandom, setIsRandom] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(null);


  const handleLeftClick = () => {
    if (isRandom) {
      setDirection('left');
      setIndex(previousIndex);
    }

    else if (index > 0) {
      setDirection('left');
      setIndex(index - 1);      
    }
    setIsFlipped(false);
  }

  const handleRightClick = () => {
    if (isRandom) {
      setPreviousIndex(index);
      setDirection('right');
      setIndex(`${Math.floor(Math.random() * cards.length)}`);
    }
    else if (index < cards.length - 1) {
      setDirection('right');
      setIndex(index + 1);
    }
    setIsFlipped(false);
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleRandom = () => {
    setIsRandom(!isRandom);
    setIndex(0);
  }

  return (
    <div>
      <div className='header'>
        <img src='/images/gundam.jpg' alt="Gundam" className='header-img' />
      </div>
      <div className='body'>
        <h1 className='title'>Gundam Series Flashcard Challenge!</h1>
        <p className='description'>Test your knowledge of the Mobile Suit Gundam universe with this interactive flashcard challenge! 
          Flip through questions about characters, mobile suits, battles, and more. 
          Can you master all the trivia and become a true Gundam expert?</p>
        <p className='cardCount'> Number of Cards: {!isRandom ? `${index + 1} / ${cards.length}` : `${cards.length}`}  </p>

        <div 
        className={`card card-slide${direction ? ` card-slide-${direction}` : ''}`} 
        key={index}
        onAnimationEnd={() => setDirection(null)}
        onClick={handleFlip}
        >
          <Card question={cards[index].question} answer={cards[index].answer} isFlipped={isFlipped} index={index} image={cards[index].image} />
        </div>

        <div>
          <Guess answer={cards[index].answer} next={handleRightClick} isFlipped={isFlipped}/>
        </div>

        <button onClick={handleLeftClick} disabled={index===0 && !isRandom} className={index===0 && !isRandom ? 'nav-btn disabled' : 'nav-btn'} >Previous</button>
        <button onClick={handleRightClick} disabled={index===cards.length-1 && !isRandom} className={index===cards.length-1 && !isRandom ? 'nav-btn disabled' : 'nav-btn'} >Next</button>
        <button onClick={handleRandom} className={`random-btn ${isRandom ? 'on' : ''}`}> Shuffle Cards </button>
      </div>
      <div className="footer">
        <p>Created by Yaowei Lei. </p>
      </div>
    </div>
  )
}

const cards = [
  { question: "A Japanese anime series featuring giant robots called ___ ___ Gundam.", answer: "Mobile Suit", image: "/images/1q.jpg" },
  { question: "Who is the main protagonist of the original Mobile Suit Gundam?", answer: "Amuro Ray", image: "/images/2q.jpg" },
  { question: "What is the name of the main mobile suit in the original series?", answer: "RX-78-2 Gundam", image: "/images/3q.jpg" },
  { question: "Who is the main antagonist in the original series?", answer: "Char Aznable", image: "/images/4q.jpg" },
  { question: "What organization does Amuro Ray fight for?", answer: "Earth Federation", image: "/images/5q.jpg" },
  { question: "What is the name of the space colony nation opposing the Earth Federation?", answer: "Principality of Zeon", image: "/images/6q.jpg" },
  { question: "Who is the creator of Mobile Suit Gundam?", answer: "Yoshiyuki Tomino", image: "/images/7q.jpg" },
  { question: "What year did the original Mobile Suit Gundam air?", answer: "1979", image: null },
  { question: "A human with heightened mental awareness and abilities is ___ in Gundam?", answer: "Newtype", image: null },
  { question: "What is Char Aznable's nickname?", answer: "The Red Comet", image: null },
  { question: "What is the name of Amuro Ray's father?", answer: "Tem Ray", image: "/images/11q.jpg" },
  { question: "Which mobile suit is piloted by Char Aznable in the original series?", answer: "MS-06S Zaku II", image: "/images/12q.jpg" },
  { question: "What is the name of the war depicted in the original series?", answer: "One Year War", image: null },
  { question: "Char Aznable's sister (A member of the White Base crew) is ___ ___.", answer: "Sayla Mass", image: "/images/14q.jpg" },
  { question: "What is the name of the battleship that serves as the main setting?", answer: "White Base", image: "/images/15q.jpg" },
  { question: "What is the name of the sequel to the original Mobile Suit Gundam?", answer: "Zeta Gundam", image: "/images/16q.jpg" },
  { question: "What is the name of the mass-produced mobile suit used by Zeon?", answer: "Zaku II", image: "/images/17q.jpg" },
  { question: "The captain of the White Base is ___ ___." , answer: "Bright Noa", image: "/images/18q.jpg" },
  { question: "What is Gundam's signature weapon?", answer: "Beam saber.", image: null },
  { question: "What is the name of the Earth Federation's mass-produced mobile suit?", answer: "RGM-79", image: "/images/20q.jpg" },
];

export default App
