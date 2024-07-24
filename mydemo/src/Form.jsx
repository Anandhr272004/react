
      // <------Form using useState---------->

// import {useState} from 'react';

// const Form = () => {
//   // useState hooks for each input field

//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [input3, setInput3] = useState('');
//   const [input4, setInput4] = useState('');

//   // Function for form submission
//   const handleSubmit = (e) => {

//     // Prevent Page Reload:    By calling e.preventDefault(), prevent the browser from reloading the page.
    
//     e.preventDefault();
//     console.log('Name:', input1);
//     console.log('Age:', input2);
//     console.log('Email-ID:', input3);
//     console.log('Contact:', input4);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h3>Form Validation</h3>
//           <label>
//             Name:
//             <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Age:
//             <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Email id:
//             <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Contact:
//             <input type="text" value={input4} onChange={(e) => setInput4(e.target.value)}
//             />
//           </label>
//         </div>
//         <button type="submit" >Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;





      // <--------Form using the object ----------> 


import { useState } from 'react';

const Form = () => {
  // useState hook for managing form inputs as an object
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });

  // Function for form submission
  const handleSubmit = (e) => {
    // Prevent Page Reload
    e.preventDefault();
    console.log('Name:', inputs.input1);
    console.log('Age:', inputs.input2);
    console.log('Email-ID:', inputs.input3);
    console.log('Contact:', inputs.input4);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Form Validation</h3>
          <label>
            Name:
            <input type="text" name="input1" value={inputs.input1} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number"  name="input2" value={inputs.input2} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Email id:
            <input type="text" name="input3" value={inputs.input3} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Contact:
            <input type="text" name="input4" value={inputs.input4} onChange={handleInputChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
