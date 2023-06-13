import { createSlice } from '@reduxjs/toolkit';
import { getDataThunk } from '../thunks/data-thunk';

const initialState = {
  currentChannelId: 1,
  channels: [],
  channelsNames: [],
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      const currentState = state;
      currentState.currentChannelId = payload;
    },
    addChannel: (state, { payload }) => {
      const currentState = state;
      currentState.channels = [...currentState.channels, payload];
      currentState.channelsNames = currentState.channels.map((channel) => channel.name);
    },
    renameChannel: (state, { payload }) => {
      const currentState = state;
      const channel = currentState.channels.find((ch) => ch.id === payload.id);
      channel.name = payload.name;
      currentState.channelsNames = currentState.channels.map((ch) => ch.name);
    },
    removeChannel: (state, { payload }) => {
      const currentState = state;
      currentState.channels = currentState.channels.filter((channel) => channel.id !== payload.id);
      currentState.channelsNames = currentState.channels.map((channel) => channel.name);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataThunk.fulfilled, (state, { payload }) => {
      const currentState = state;
      currentState.channels = payload.channels;
      currentState.channelsNames = currentState.channels.map((channel) => channel.name);
    });
  },
});

export const { actions } = channelsSlice;

export default channelsSlice.reducer;
