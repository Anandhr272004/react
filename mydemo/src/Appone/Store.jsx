
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './../Appone/Slice'; 

const store = configureStore({
  reducer: {
    users: todoReducer, 
  },
});

export default store;
