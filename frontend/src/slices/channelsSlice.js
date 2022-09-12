import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  return userId?.token ? { Authorization: `Bearer ${userId.token}` } : {};
};

export const fetchChannels = createAsyncThunk(
  'channels/fetchChannels',
  async () => {
    const response = await axios.get(routes.dataPath(), {
      headers: getAuthHeader(),
    });
    return response.data.channels;
  },
);

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState();

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.fulfilled, channelsAdapter.addMany);
  },
});

export const selectors = channelsAdapter.getSelectors((state) => state.channels);

export const { actions } = channelsSlice;

export default channelsSlice.reducer;
