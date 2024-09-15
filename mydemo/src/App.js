import React ,{ useState } from 'react'
import Header from './Admin/Header';
import Sidebar from './Admin/Sidebar';
import Homeie from './Admin/Homeie';
import './../src/Admin/Admin-pannel.css'
import Adminpannel from './Admin/Admin-pannel';
import Login from './Admin/Login';
import './Admin/Login.css'
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
      {/* <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      {/* <Homeie /> */}
      {/* <Adminpannel /> */}
      <Login />
    </>
  )
}

export default App












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