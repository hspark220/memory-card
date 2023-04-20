import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Card from './components/Card'


const App = () => {
  const [score, setScore] = useState(0);
  const [cards, setCard] = useState([1,2,3,4]);
  const [usedCards, setUsedCards] = useState([]);

  const getRandomNumberArray = () => {
    const array = [];
    let randomNumber = Math.floor(Math.random()*10);
    for (let i = 0; i < 4; i++) {
      while (array.includes(randomNumber)) randomNumber = Math.floor(Math.random()*10);
      array.push(randomNumber)
    }
    return array;
  }

  const incrementScore = e => {
    const value = e.target.id;
    
    if (usedCards.includes(value)) {
      setUsedCards([]);
      setScore(0);
    } else {
      setUsedCards(usedCards.concat(value));
      
      setCard(getRandomNumberArray)
      setScore(score + 1);
    }
    

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
