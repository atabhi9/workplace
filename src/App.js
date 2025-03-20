import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useMemo, useCallback} from 'react';

function App() {
 const [count, setCount]=useState(0);
 const [task, setTask]=useState('');
 const [name, setName]=useState('');
 const [tasks, setTasks]=useState([]);

 const showTask=()=>{
  if(task!=='' && name !=''){
    setTasks([...tasks, {name, task}]);
    setTask('');
    setName('');
  }
 }
 const deleteTask=(index)=>{
  setTasks(tasks.filter((__, i)=>i !==index))
 }


  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
      type='text'
      placeholder='Enter name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <input
      type='text'
      placeholder='Enter task'
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      />
      <button onClick={(showTask)}>Submit</button>
      <ul>
        {tasks.map((t, index)=>(
          <li key={index}>
            {t.name} : {t.task}  
            <button onClick={()=>deleteTask(index)}>Delete</button>
          
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
