import { createSlice } from "@reduxjs/toolkit";

export const managementMenu = createSlice({
  name: "MenuHandler",

  initialState: {
    activeMenu: false,
    activeModal: false,
  },

  reducers: {
    handlerMenu: (state, action) => {
      state.activeMenu = !state.activeMenu;
    },
    handlerModal: (state) => {
      state.activeModal = !state.activeModal;
    },
    
  },
});

export const { handlerMenu, handlerModal } = managementMenu.actions;

export default managementMenu.reducer;
