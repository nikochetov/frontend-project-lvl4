import React from 'react';

const useSocket = (socket) => {
  React.useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);
};

export default useSocket;
