import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState({
  currentChannelId: 1,
  channels: null,
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannelId: (state, { payload }) => {
      const currentState = state;
      currentState.currentChannelId = payload;
    },
    addChannels: channelsAdapter.addMany,
    removeChannel: channelsAdapter.removeOne,
    addChannel: channelsAdapter.addOne,
  },
});

export const selectors = channelsAdapter.getSelectors((state) => state.channels);

export const { actions } = channelsSlice;

export default channelsSlice.reducer;
