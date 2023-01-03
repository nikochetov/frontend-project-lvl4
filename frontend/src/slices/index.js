import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';

export default configureStore({
  reducer: {
    channelsState: channelsReducer,
    messagesState: messagesReducer,
  },
});
