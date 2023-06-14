import React from 'react';
import { SocketContext } from '../contexts';
import SocketConnectionCondition from '../constants/socket-connection-condition';

const useSocketCondition = () => {
  const socket = React.useContext(SocketContext);
  const [socketConnectionCondition, setSocketConnectionCondition] = React.useState('idle');
  socket.on(SocketConnectionCondition.connect, () => {
    setSocketConnectionCondition('connected');
  });
  socket.on(SocketConnectionCondition.disconnect, () => {
    setSocketConnectionCondition('disconnected');
  });
  socket.on(SocketConnectionCondition.error, () => {
    setSocketConnectionCondition('error');
  });

  return socketConnectionCondition;
};

export default useSocketCondition;
