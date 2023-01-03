import { createSlice } from '@reduxjs/toolkit';
import { getDataThunk } from '../thunks/data-thunk';

const initialState = {
  messages: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const currentState = state;
      currentState.messages = [...currentState.messages, action.payload];
    },
  },
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
