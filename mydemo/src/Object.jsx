 // <--------Form using the object ----------> 


 import { useState } from 'react';

 const Object = () => {
   // useState hook for managing form inputs as an object
   const [inputs, setInputs] = useState({
    name: '',
    age: '',
    email: '',
    contact: ''
   });
 
 
   // Function to handle input changes
  const handleInputChange = (e) => {

     const { name, value } = e.target;
     setInputs((inputs)=>({
       ...inputs,
       [name]: value
     }));
   };
    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);

    }
   return (
     <div>
       <form onSubmit={handlesubmit}>
         <div>
           <h3>Form Validation</h3>
           <label>
             Name:
             <input type="text" name="name" value={inputs.name} onChange={handleInputChange} />
           </label>
         </div>
         <div>
           <label>
             Age:
             <input type="number"  name="age" value={inputs.age} onChange={handleInputChange} />
           </label>
         </div>
         <div>
           <label>
             Email id:
             <input type="text" name="email" value={inputs.email} onChange={handleInputChange} />
           </label>
         </div>
         <div>
           <label>
             Contact:
             <input type="text" name="contact" value={inputs.contact} onChange={handleInputChange} />
           </label>
         </div>
         <button type="submit" onSubmit={handlesubmit}>Submit</button>
       </form>
     </div>
   );
 };
 
 export default Object;