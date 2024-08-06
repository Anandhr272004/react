 // create a POST method example

 import React, { useState } from "react";
 import { useForm } from "react-hook-form";
 
 const Postmethodone = () => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm();
   const [loading, setLoading] = useState(false);
   const [apiError, setApiError] = useState(null);
   const [responseData, setResponseData] = useState(null);
 
   const handleCreateUser = async (data) => {
 
     setLoading(true);
 
     try {
       const response = await fetch('https://reqres.in/api/users', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
           'Content-Type': 'application/json'
         }
       });
 
       if (!response.ok) {
         const errorText = await response.text();
         throw new Error(`Network response was not ok: ${errorText}`);
       }
 
       const responseData = await response.json();
       console.log('Response Data:', responseData);
       setResponseData(responseData);
     }
     
      catch (error) {
       setApiError(`User creation failed. Please try again. Error: ${error.message}`);
       
       // console.error('Error:', error);
     }
     setLoading(false);
     reset();
   };
 
   const userOptions = {
     name: {
       required: "Name is required",
       minLength: {
         value: 2,
         message: "You must enter the name"
       }
     },
     job: {
       required: "Job is required",
       minLength: {
         value: 2,
         message: "You must enter the Job"
       }
     },
   };
   return (
     <div className="container">
       <div className="title">Create User</div>
       <form onSubmit={handleSubmit(handleCreateUser)}>
         <div className="user-details">
               <div>
                 <label className="details">Name</label>
                 <input
                   type="text"
                   name="name"
                   placeholder="Enter your name"
                   {...register('name', userOptions.name)} /><br />
                 <div className="text-danger">
                   {errors?.name && errors.name.message}
                 </div>
               </div>
           <br />
               <div>
                 <label className="details">Job</label>
                 <input
                   type="text"
                   name="job"
                   placeholder="Enter your job"
                   {...register('job', userOptions.job)} /><br />
                 <div className="text-danger">
                   {errors?.job && errors.job.message}
                 </div>
               </div>
           <br/>
         </div>
         <button className="button" type="submit" disabled={loading}>
           {loading ? 'Submitting...' : 'Submit'}
         </button>
       </form>
     </div>
   );
 };
 
 export default Postmethodone;
 