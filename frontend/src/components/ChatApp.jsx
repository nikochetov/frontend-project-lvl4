import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth, useSocket } from '../hooks';
import Chat from './Chat';
import { SocketContext } from '../contexts';
import { getDataThunk } from '../thunks/data-thunk';

const ChatApp = () => {
  const auth = useAuth();
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  useSocket(socket);

  useEffect(() => {
    dispatch(getDataThunk());
  }, []);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (auth.isLoggedIn && error.response.status === 401) {
        auth.logOut();
      }
    },
  );

  return <Chat />;
};

export default ChatApp;
