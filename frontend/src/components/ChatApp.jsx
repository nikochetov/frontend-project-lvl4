import axios from 'axios';
import React, { useContext } from 'react';
import { useAuth, useSocket } from '../hooks';
import Chat from './Chat';
import { SocketContext } from '../contexts';

const ChatApp = () => {
  const auth = useAuth();
  const socket = useContext(SocketContext);
  useSocket(socket);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        auth.logOut();
      }
    },
  );

  return (
    <Chat />
  );
};

export default ChatApp;
