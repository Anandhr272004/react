import React , { useState, useEffect} from 'react';

function City() {
  const [City, setCity] = useState(" "); 

  useEffect(() => {
    setCity('Coimbatore');//for everyrender it will set coimbatore as default
  }, []); // empty dependency array ensures (this runs only once) after the initial render

  const cities = ["Chennai", "Salem", "Coimbatore"]; 

  return (
    <div>
      <select value={City} onChange={(e) => setCity(e.target.value)}>
       {cities.map((City) => (
        <option>
            {City}
          </option>
                  ))}
       </select>
    </div>
  );
}

export default City;
