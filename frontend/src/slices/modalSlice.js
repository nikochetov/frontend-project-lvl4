import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  kind: null,
  data: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      const currentState = state;
      currentState.isOpen = true;
      const { kind, data } = payload;
      currentState.data = data;
      currentState.kind = kind;
    },
    closeModal: (state) => {
      const currentState = state;
      currentState.isOpen = false;
      currentState.data = null;
      currentState.kind = null;
    },
  },
});

export const { actions } = modalSlice;

export default modalSlice.reducer;
