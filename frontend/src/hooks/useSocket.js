import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import socketRequestKind from '../constants/socket-request-kind';
import { actions as messagesActions } from '../slices/messagesSlice';
import { actions as channelsActions } from '../slices/channelsSlice';

const useSocket = () => {
  const dispatch = useDispatch();
  const socket = io();
  socket.on(socketRequestKind.newMessage, (ev) => {
    console.log(ev)
    dispatch(messagesActions.addMessage(ev));
  });
  socket.on(socketRequestKind.newChannel, (ev) => {
    channelsActions.adChannel(ev);
  });

  return socket;
};

export default useSocket;
