// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Routerone from './Routerone';
import Todo from './Todo';
import { Provider } from 'react-redux';
import Store from './Appone/Store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <BrowserRouter> */}
    {/* <Routerone /> */}
  
   <Provider store={Store}>
  <React.StrictMode>
    <App />
    {/* <Todo/> */}
  </React.StrictMode>
  </Provider>
  {/* </BrowserRouter> */}
</React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
