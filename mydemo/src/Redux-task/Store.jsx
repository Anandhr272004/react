import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slice';

const store = configureStore({
  reducer: {
    users: userReducer,
 //state name : user  defined name
  },
});

export default store;
