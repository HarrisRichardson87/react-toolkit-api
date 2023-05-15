import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loremReducer from '../features/counter/loremSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lorem: loremReducer,
  },
});
