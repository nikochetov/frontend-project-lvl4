import React from 'react';
import { toast } from 'react-toastify';
import { SocketContext } from '../contexts';
import SocketConnectionCondition from '../constants/socket-connection-condition';

const notify = (condition) => {
  switch (condition) {
    case 'connected':
      toast.success('Соединение восстановлено', {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    case 'error':
      toast.error('Ошибка соединения', {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    default:
      break;
  }
};

const useSocketCondition = () => {
  const socket = React.useContext(SocketContext);
  const [socketConnectionCondition, setSocketConnectionCondition] = React.useState('idle');

  React.useEffect(() => {
    notify(socketConnectionCondition);
  }, [socketConnectionCondition]);

  socket.on(SocketConnectionCondition.connect, () => {
    setSocketConnectionCondition(socketConnectionCondition === 'error' ? 'connected' : socketConnectionCondition);
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
