import React, { useContext } from 'react';
import response from '../src/data.json'; 
import { UserContext } from './ContextProvider';

const Context = () => {
    console.log(response.user);
    const name = useContext(UserContext);

  return (
    <div>
      <h1>Todo List {name}</h1>
      
      <ul>
        {response.user.map((item, index)=> 
        <li key={item.id}> {item.title} {item.completed.toString()}</li>
        )}
      </ul>
    </div>
  );
};

export default Context;
