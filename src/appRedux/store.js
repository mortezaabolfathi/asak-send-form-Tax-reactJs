import { configureStore } from '@reduxjs/toolkit';
import  menuReducer  from './features/menu/managementMenu';


export const store = configureStore({
  reducer: {
    menu:menuReducer,
  },
})