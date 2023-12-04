import React from 'react';

const useSocket = (socket) => {
  React.useEffect(() => {
    socket.connect();
    console.log('connect::::on hook::::', socket.id);

    return () => {
      socket.disconnect();
    };
  }, []);
};

export default useSocket;
