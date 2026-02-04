import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  selectedMovie: null,
  activeProfile: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.selectedMovie = action.payload;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedMovie = null;
    },
    setActiveProfile(state, action) {
      state.activeProfile = action.payload;
    },
    clearActiveProfile(state) {
      state.activeProfile = null;
    },
  },
});

export const {
  openModal,
  closeModal,
  setActiveProfile,
  clearActiveProfile,
} = uiSlice.actions;

export default uiSlice.reducer;

