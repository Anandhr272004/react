import React from 'react';
import data from './Myindex.json'; // Replace with the correct path to your JSON file

const Indexone = () => {
  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <h2>{data[key].title}</h2>
          <p>{data[key].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Indexone;
