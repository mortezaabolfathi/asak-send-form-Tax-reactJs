import { configureStore } from '@reduxjs/toolkit';
import  menuReducer  from './features/menu/menuHandler';


export const store = configureStore({
  reducer: {
    menu:menuReducer,
  },
})