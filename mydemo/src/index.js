import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Routerone from './Routerone';
import { BrowserRouter as router } from 'react-router-dom';
import Todo from './Todo';
import { Provider } from 'react-redux';
import Store from './Appone/Store';
import store from './Redux-task/Store';
import App from './App';
import Home from './Redux-task/Home';
import { Routes, Route, Router } from 'react-router-dom';
import Adminpannel from './Admin/Admin-pannel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Admin-pannel" element={<Adminpannel />} />
        </Routes>

      </BrowserRouter>
      {/* <Todo/> */}

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
