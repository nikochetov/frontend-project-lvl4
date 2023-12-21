import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';
import modalReducer from './modalSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    userState: userReducer,
    channelsState: channelsReducer,
    messagesState: messagesReducer,
    modalsState: modalReducer,
  },
});
