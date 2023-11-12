import { SocketContext } from '../contexts';

const SocketProvider = ({ socket, children }) => (
  <SocketContext.Provider value={socket}>
    { children }
  </SocketContext.Provider>
);

export default SocketProvider;
