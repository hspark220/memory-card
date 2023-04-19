import { useState } from 'react';
import './App.css';
import Card from './components/Card'

const App = () => {
  const [score, setCount] = useState(0);

  const incrementCount = () => {
    setCount(score + 1);
  };

  return(
    <div className='body'> 
      <h1 className='count'>{score}</h1>
      <Card onClick={incrementCount} />
    </div>
  );
};

export default App;
