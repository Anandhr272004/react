// import React from 'react';
// import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// // import Routerone from './Routerone';
// import { BrowserRouter as router } from 'react-router-dom';
// import Todo from './Todo';
// import { Provider } from 'react-redux';
// import Store from './Appone/Store';
// import store from './Redux-task/Store';
// import App from './App';
// import Home from './Redux-task/Home';
// import { Routes, Route, Router } from 'react-router-dom';
// import Adminpanel from './Admin/Admin-pannel';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/Admin-pannel" element={<Adminpanel />} />
//         </Routes>

//       </BrowserRouter>
//       {/* <Todo/> */}

//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ContextProvider from './ContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import store from './ReduxTask/store';
import Login from './Admin/Login'; 
import Adminpannel from './Admin/Admin-pannel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>  
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/admin/*" element={<Adminpannel />} />
  </Routes>    
</Router>
);
reportWebVitals();
  // <ContextProvider>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </ContextProvider>
  
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

