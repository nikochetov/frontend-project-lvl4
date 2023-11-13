import React from 'react';
import { SocketContext } from '../contexts';
import SocketConnectionCondition from '../constants/socket-connection-condition';

const useSocketCondition = () => {
  const socket = React.useContext(SocketContext);
  const [socketConnectionCondition, setSocketConnectionCondition] = React.useState(
    SocketConnectionCondition.idle,
  );

  socket.on(SocketConnectionCondition.connect, () => {
    setSocketConnectionCondition(
      socketConnectionCondition === SocketConnectionCondition.error
        ? SocketConnectionCondition.connect
        : socketConnectionCondition,
    );
  });
  socket.on(SocketConnectionCondition.disconnect, () => {
    setSocketConnectionCondition(SocketConnectionCondition.disconnect);
  });
  socket.on(SocketConnectionCondition.error, () => {
    setSocketConnectionCondition(SocketConnectionCondition.error);
  });

  return socketConnectionCondition;
};

export default useSocketCondition;
