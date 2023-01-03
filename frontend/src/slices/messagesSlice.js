import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { actions as channelsActions } from './channelsSlice';
import { getDataThunk } from '../thunks/data-thunk';

const initialState = {
  messages: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(channelsActions.removeChannel, (state, action) => {
    //   const channelId = action.payload;
    //   console.log(state.entities);
    // });
    builder.addCase(getDataThunk.fulfilled, (state, action) => {
      const currentState = state;
      currentState.messages = action.payload.messages;
    });
  },
});

export const { actions } = messagesSlice;

export default messagesSlice.reducer;
