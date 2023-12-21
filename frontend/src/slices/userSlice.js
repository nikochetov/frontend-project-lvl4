import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) ?? null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      const currentState = state;
      const { user } = payload;
      currentState.user = user;
    },
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;
