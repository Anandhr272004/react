import './App.css';
import Formhooks from './Form-hooks';
// import Counter from './Counter';
// import Class from './Class';
// import Form from './Form';
// import Object from './Object';
// import Function from './Function';
// import Effect from './Effect';

// function App() {

//   return (
    <>
      {/* <Class /> */}
      {/* <Function  /> */}
      {/* <Form /> */}
      
      {/* <Formhooks   /> */}
      
      {/* <Object /> */}
      {/* <Counter /> */}
      {/* <Effect/> */}
    </>

//   );
// }

// export default App;


//using props to show the output in the same screen

function App() {
  const handleFormData = (data) => {
    console.log('Received form data:', data);
    const formDataElement = document.getElementById('form-data');
    formDataElement.innerHTML = `
      <h2>Form Data:</h2>
      <p>Name: ${data.name}</p>
      <p>Username: ${data.username}</p>
      <p>Email: ${data.email}</p>
      <p>Phone Number: ${data.number}</p>
      <p>Password: ${data.password}</p>
      <p>Confirm Password: ${data.cpassword}</p>
      <p>Gender: ${data.gender}</p>
      <p>Terms and Conditions: ${data.terms}</p>`;
  };

  return (
    <div>
      <Formhooks onSubmit={handleFormData} />
      <div id="form-data"style={{ color: 'white' }}></div>
    </div>
  );
}
export default App;