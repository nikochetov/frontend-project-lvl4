import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import routes from '../routes';
import getAuthHeader from '../utils/get-auth-header';

export const fetchData = async () => axios.get(routes.dataPath(), {
  headers: getAuthHeader(),
});

export const getDataThunk = createAsyncThunk('dataThunk', async () => {
  const response = await fetchData();
  return response.data;
});

export default fetchData;
