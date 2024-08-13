
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
function App() {

  return (
    <>
     <div className='App'>
     {/* <Counter /> */}
     {/* <City/> */}
      <CityDrop/>
     {/* <Cityes/> */}
     </div>
     
     
   
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