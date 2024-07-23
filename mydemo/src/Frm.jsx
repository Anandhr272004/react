import  { useState } from 'react';

const Frm = () => {
  // State hooks for each input field
  const [input1, setInput1] = useState('');
 

  // Function to handle form submission
  const handleSubmit = (e) => {

    // Prevent Page Reload: By calling e.preventDefault(), prevent the browser from reloading the page.
    
    e.preventDefault();
    console.log('Input 1:', input1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input 1:
            <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          </label>
        </div>

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Frm;
