import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useMemo, useCallback} from 'react';

function App() {
 const [count, setCount]=useState(0);


  return (
    <div className="App">
      <h1>To Do List</h1>
      <p1>Count:{count}</p1>
      <button onClick={()=>setCount(count+1)}>+</button>
      
    </div>
  );
}

export default App;
