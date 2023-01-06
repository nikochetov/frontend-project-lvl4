import { createSlice } from '@reduxjs/toolkit';
import { getDataThunk } from '../thunks/data-thunk';

const initialState = {
  currentChannelId: 1,
  channels: [],
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      const currentState = state;
      currentState.currentChannelId = payload;
    },
    adChannel: (state, { payload }) => {
      const currentState = state;
      currentState.channels = [...currentState.channels, payload];
    },
    removeChannel: (state, { payload }) => {
      const currentState = state;
      currentState.channels = currentState.channels.filter((channel) => channel.id === payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataThunk.fulfilled, (state, action) => {
      const currentState = state;
      currentState.channels = action.payload.channels;
    });
  },
});

export const { actions } = channelsSlice;

export default channelsSlice.reducer;
