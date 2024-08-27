import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    open:false,
    sheet:false
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open
    },
    toggleSheet:(state) => {
      state.sheet = !state.sheet
    },
  },
});

export const {toggleSidebar, toggleSheet} = sidebarSlice.actions

export default sidebarSlice.reducer