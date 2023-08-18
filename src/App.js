
import './App.css';
import { useState } from 'react';

function countInitial(){
  console.log('running..');
  return {count: 4, theme: 'blue'};
}

function App() {
 //const [count, setCount] = useState(() => countInitial());
 const [myState, setMyState] = useState(() => countInitial())
 const[theme2, setTheme2] = useState('red');

 const count = myState.count;
 const theme = myState.theme;
 
 function decrementCount(){  
  setMyState(prevState => {
    return {...prevState, count: prevState.count - 1}
  })
  setTheme2('yellow')
 }
 function incrementCount(){  
  setMyState(prevState => {
    return {...prevState, count: prevState.count + 1}
  })
  setTheme2('green')
 }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}{theme}-{theme2}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
