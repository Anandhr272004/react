import React from 'react';
// import data from './dataone.json';

const details=[
  {
    "title": "First Item",
    "description": "This is the first item."
  },
  {
    "title": "Second Item",
    "description": "This is the second item."
  }
];

const Data = () => {
  return (
    <div>
      {details.map((item,index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;