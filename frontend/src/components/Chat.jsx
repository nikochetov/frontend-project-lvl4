import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { io } from 'socket.io-client';
import { fetchData } from '../thunks/data-thunk';
import Messages from './messages/Messages';
import Channels from './channels/Channels';
import { UserContext } from '../contexts';

const socket = io();
socket.on('newMessage', (ev) => {
  console.log('subscription on new messages:::', ev);
});

const Chat = () => {
  // const [formValue, setFormValue] = useState('');
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  console.log(user.username);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const clickButton = () => {
    socket.emit('newMessage', { body: 'hello, world' });
  };

  return (
    <div className="mt-3">
      <Channels />
      <Messages />
      <Button className="mt-3" onClick={() => clickButton()}>Emit message</Button>
    </div>
  );
};

export default Chat;
