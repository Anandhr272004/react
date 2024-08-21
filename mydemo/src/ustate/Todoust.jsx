import React, { useState } from 'react';

function Todoust() {
  const [task, setTask] = useState('');    //stores the current value of the input field
  const [value, setValue] = useState([]);  // array stores the list of items 

  const addTask = () => {
    setValue([...value, task]);
    setTask('');
  };
  const clearAllTasks = () => {
    setValue([]);
  };

  const removeTask = (removed) => {
    const delet = value.filter((tasklist) => removed !== tasklist);
    setValue(delet);
  }

  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={addTask}>Add Task</button>
      {value.length > 0 && <button onClick={clearAllTasks}>Clear All</button>}
      <ul>
        {value.map((tasklist, index) => (
          <li key={index}>
            {tasklist}
            <button onClick={() => removeTask(tasklist)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todoust;
