import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    channelsState: channelsReducer,
    messagesState: messagesReducer,
    modalState: modalReducer,
  },
});
