import { createSlice } from '@reduxjs/toolkit'


export const managementMenu = createSlice({
  name: 'MenuHandler',

  initialState:{
    activeMenu:false,
  },

  reducers: {
    handlerMenu: (state, action) => {
      console.log("state is :", state.menuIs)
    }
  },
})


export const { handlerMenu } = managementMenu.actions

export default managementMenu.reducer