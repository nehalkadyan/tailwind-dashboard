import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSideBar: true,
  toggleCategory: true,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.toggleSideBar = !state.toggleSideBar;
    },
    toggleCategories: (state, action) => {
      state.toggleCategory = action.payload;
    },
  },
});

export const { toggleSidebar, toggleCategories } = toggleSlice.actions;
export default toggleSlice.reducer;
