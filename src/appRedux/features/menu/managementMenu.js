import { createSlice } from '@reduxjs/toolkit'


export const managementMenu = createSlice({
  name: 'MenuHandler',

  initialState:{
    activeMenu:false,
  },

  reducers: {
    handlerMenu: (state, action) => {
      state.activeMenu=!state.activeMenu;
    }
  },
})


export const { handlerMenu } = managementMenu.actions;

export default managementMenu.reducer