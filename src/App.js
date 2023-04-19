import { useState } from 'react';
import './App.css';
import Card from './components/Card'

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return(
    <div> 
      <h1 className='count'>{count}</h1>
      <Card onClick={incrementCount} />
    </div>
  );
};

export default App;
