import { useSocket } from '../hooks';
import { SocketContext } from '../contexts';

const SocketProvider = ({ children }) => {
  const socket = useSocket();
  return <SocketContext.Provider value={ socket }>
    { children }
  </SocketContext.Provider>;
};

export default SocketProvider;
