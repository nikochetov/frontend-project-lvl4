import { useDispatch } from 'react-redux';
import React from 'react';
import socketRequestKind from '../constants/socket-request-kind';
import { actions as messagesActions } from '../slices/messagesSlice';
import { actions as channelsActions } from '../slices/channelsSlice';
import SocketConnectionCondition from '../constants/socket-connection-condition';

const useSocket = (socket) => {
  // const [socketConnectionCondition, setSocketConnectionCondition] = React.useState('idle');
  // const [socketAction, setSocketAction] = React.useState(null);

  React.useEffect(() => () => {
    socket.disconnect();
  }, []);

  const dispatch = useDispatch();
  socket.on(socketRequestKind.newMessage, (ev) => {
    dispatch(messagesActions.addMessage(ev));
  });
  socket.on(socketRequestKind.newChannel, (ev) => {
    dispatch(channelsActions.addChannel(ev));
    dispatch(channelsActions.setCurrentChannelId(ev.id));
  });
  socket.on(socketRequestKind.renameChannel, (ev) => {
    dispatch(channelsActions.renameChannel(ev));
  });
  socket.on(socketRequestKind.removeChannel, (ev) => {
    dispatch(channelsActions.removeChannel(ev));
    dispatch(channelsActions.setCurrentChannelId(1));
  });

  // React.useEffect(() => {
  //   notify(socketConnectionCondition);
  // }, [socketConnectionCondition]);

  // socket.on(SocketConnectionCondition.connect, () => {
  //   setSocketConnectionCondition(socketConnectionCondition === 'error' ? 'connected' : socketConnectionCondition);
  // });
  // socket.on(SocketConnectionCondition.disconnect, () => {
  //   setSocketConnectionCondition('disconnected');
  // });
  // socket.on(SocketConnectionCondition.error, () => {
  //   setSocketConnectionCondition('error');
  // });

  return socket;
};

export default useSocket;
