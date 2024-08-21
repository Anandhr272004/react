import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
// import Routerone from './Routerone';
import { BrowserRouter as router } from 'react-router-dom';
import Todo from './Todo';
import { Provider } from 'react-redux';
import Store from './Appone/Store';
import store from './Redux-task/Store';
import App from './App';
import Home from './Redux-task/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
      <App />
    
    </BrowserRouter>
    {/* <Todo/> */}

  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
