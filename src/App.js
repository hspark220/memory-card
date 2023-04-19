import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Card from './components/Card'


const App = () => {
  const [score, setScore] = useState(0);
  const [cards, setCard] = useState([1,2,3,4]);
  const [usedCards, setUsedCards] = useState([]);

  const incrementScore = e => {
    console.log(e)
    setScore(score + 1);

  };

  return(
    <div className='body'> 
      <h1 className='count'>{score}</h1>
      <div className='cards'>
        {cards.map( card => {
          return <Card card={card} onClick={incrementScore} key={uniqid()}/>
        })}
      </div>
      
    </div>
  );
};

export default App;
