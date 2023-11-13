import React from 'react';

const useSocket = (socket) => {
  React.useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
