import React, { useState } from 'react';

function Todoust() {
  const [task, setTask] = useState('');
  const [value, setValue] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
      setValue([...value, task]);
      setTask('');
  };
  const clearAllTasks = () => {
    setValue([]);
  };

  const removeTask = (index) => {
    setValue(value.filter((_, i) => i !== index)); 
 };

 

  return (
    <div>
      <input type="text" value={task} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>
       {value.length>0 && <button onClick={clearAllTasks}>Clear All</button>}
      <ul>
        {value.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todoust;
