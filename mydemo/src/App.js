
import './App.css';

import Indexone from './Indexone';
// import Model from './Model';
// import Context from './Context';
// import Postmethod from './Postmethod';
import Nav from './Routerbasic';
import UseReducerone from './Usereduserone';
import Counter from './Counterredux';
import City from './City';
import CityDrop from './CityDrop';
import Cityes from './Cityes';
import Getone from './Getone';
import Routerone from './Routerone';
import Ref from './Ref';
import Model from './Model';
import Todo from './Todo';
import ComponentsA from './ComponentA';
import UseRed from './UseRed';
import ToggleButton from './Usest';
// import Usesttodo from './Usesttodo';
import Formhooks from './Form-hooks';
import Form from './Form';
import Frm from './Frm';
import Usestate from './ustate/Usestate';
import Useref from './Useref';
import ToggleText from './ustate/ToggleText';
import Todoust from './ustate/Todoust';
import Timer from './ustate/Timer';
import Click from './ustate/Click';
import { Routes,Route } from 'react-router-dom';
import Home from './Redux-task/Home';
import User from './Redux-task/Users';
import Postmethodone from './Postmethodone';
import Example from './Example';
import Usesttodo from './Usesttodo';
function App() {

  return (
    <>
    
     {/* <Counter /> */}
     {/* <City/> */}
      {/* <CityDrop/> */}
      {/* <ComponentsA /> */}
      {/* <UseReducerone /> */}
      {/* <Useref/> */}
      {/* <UseRed /> */}
    {/* <Todo/> */}
       {/* <ToggleText/> */}
       {/* <Example /> */}
       {/* <Usesttodo /> */}
       <Todoust />
       {/* <Postmethodone /> */}
      {/* <Todoust/> */}
      {/* <Timer/>  */}
       {/* <Click/>  */}
      {/* <Formhooks/> */}
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes> */}
    

      {/* <ToggleButton/> */}
      {/* <Usesttodo /> */}
      {/* <Formhooks /> */}
      {/* <Form /> */}
      {/* <Frm /> */}
      {/* <Usestate/> */}
      {/* <Routerone/> */}
      {/* <Ref /> */}
      {/* <Model /> */}
      {/* <Todo/> */}
     {/* <Cityes/> */}
    </>

  );
}

export default App;


//using props to show the output in the same screen

// function App() {
//   const handleFormData = (data) => {
//     console.log('Received form data:', data);
//     const formDataElement = document.getElementById('form-data');
//     formDataElement.innerHTML = `
//       <h2>Form Data:</h2>
//       <p>Name: ${data.name}</p>
//       <p>Username: ${data.username}</p>
//       <p>Email: ${data.email}</p>
//       <p>Phone Number: ${data.number}</p>
//       <p>Password: ${data.password}</p>
//       <p>Confirm Password: ${data.cpassword}</p>
//       <p>Gender: ${data.gender}</p>
//       <p>Terms and Conditions: ${data.terms}</p>`;
//   };

//   return (
//     <div>
//       <Formhooks onSubmit={handleFormData} />
//       <div id="form-data"style={{ color: 'white' }}></div>
//     </div>
//   );
// }
// export default App;