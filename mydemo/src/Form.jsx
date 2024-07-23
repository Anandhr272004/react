import {useState} from 'react';

const Form = () => {
  // useState hooks for each input field

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  // Function for form submission
  const handleSubmit = (e) => {
    // Prevent Page Reload: By calling e.preventDefault(), prevent the browser from reloading the page.
    e.preventDefault();
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);
    console.log('Input 4:', input4);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email id:
            <input
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Contact:
            <input
              type="text"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
