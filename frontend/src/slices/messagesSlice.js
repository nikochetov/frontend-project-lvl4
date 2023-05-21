import { createSlice } from '@reduxjs/toolkit';
import { getDataThunk } from '../thunks/data-thunk';
import { actions as channelsActions } from './channelsSlice';

const initialState = {
  messages: [],
  channelMessages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      const currentState = state;
      currentState.messages = [...currentState.messages, payload];
      currentState.channelMessages = [...currentState.channelMessages, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataThunk.fulfilled, (state, { payload }) => {
        const currentState = state;
        currentState.messages = payload.messages;
        currentState.channelMessages = currentState.messages.filter(
          (message) => message.channelId === payload.currentChannelId,
        );
      })
      .addCase(channelsActions.setCurrentChannelId, (state, { payload }) => {
        const currentState = state;
        currentState.channelMessages = currentState.messages.filter(
          (message) => message.channelId === payload,
        );
      })
      .addCase(channelsActions.removeChannel, (state, { payload }) => {
        const currentState = state;
        currentState.messages = currentState.messages.filter(
          (message) => message.channelId !== payload,
        );
      });
  },
});

export const { actions } = messagesSlice;

export default messagesSlice.reducer;
