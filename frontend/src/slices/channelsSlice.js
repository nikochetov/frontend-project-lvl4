import { createEntityAdapter, createSlice, current } from '@reduxjs/toolkit';
import { getDataThunk } from '../thunks/data-thunk';

const initialState = {
  currentChannelId: 1,
  channels: null,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      const currentState = state;
      currentState.currentChannelId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataThunk.fulfilled, (state, action) => {
      const currentState = state;
      currentState.channels = action.payload.channels;
      console.log('current state ::::', current(currentState))
    });
  },
});

export const { actions } = channelsSlice;

export default channelsSlice.reducer;
