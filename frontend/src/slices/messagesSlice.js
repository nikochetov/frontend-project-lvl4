import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { actions as channelsActions } from './channelsSlice';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: messagesAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(channelsActions.removeChannel, (state, action) => {
      const channelId = action.payload;
      console.log(state.entities);
    });
  },
});

export const selectors = messagesAdapter.getSelectors((state) => state.messages);

export const { actions } = messagesSlice;

export default messagesSlice.reducer;
