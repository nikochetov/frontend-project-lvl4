import { io } from 'socket.io-client';
import { useSocket } from '../hooks';
import { SocketContext } from '../contexts';

const SocketProvider = ({ children }) => {
  const socketIo = io();
  const socket = useSocket(socketIo);
  return (
    <SocketContext.Provider value={socket}>
      { children }
    </SocketContext.Provider>
  );
};

export default SocketProvider;
