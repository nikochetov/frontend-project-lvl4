import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  kind: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      const currentState = state;
      currentState.isOpen = true;
      const { modalKind } = payload;
      currentState.kind = modalKind;
    },
    closeModal: (state) => {
      const currentState = state;
      currentState.isOpen = false;
      currentState.kind = null;
    },
  },
});

export const { actions } = modalSlice;

export default modalSlice.reducer;
