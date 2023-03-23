import { useDispatch } from 'react-redux';
import socketRequestKind from '../constants/socket-request-kind';
import { actions as messagesActions } from '../slices/messagesSlice';
import { actions as channelsActions } from '../slices/channelsSlice';

const useSocket = (socket) => {
  const dispatch = useDispatch();
  socket.on(socketRequestKind.newMessage, (ev) => {
    dispatch(messagesActions.addMessage(ev));
  });
  socket.on(socketRequestKind.newChannel, (ev) => {
    dispatch(channelsActions.addChannel(ev));
  });
  socket.on(socketRequestKind.renameChannel, (ev) => {
    dispatch(channelsActions.renameChannel(ev));
  });
  socket.on(socketRequestKind.removeChannel, (ev) => {
    dispatch(channelsActions.removeChannel(ev));
  });

  return socket;
};

export default useSocket;
