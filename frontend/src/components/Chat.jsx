import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { io } from 'socket.io-client';
import { fetchData } from '../thunks/data-thunk';
import Messages from './messages/Messages';
import Channels from './channels/Channels';
import { UserContext } from '../contexts';

const socket = io();

const Chat = () => {
  const [formValue, setFormValue] = useState('');
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  const messageInput = useRef(null);
  console.log(user.username);

  useEffect(() => {
    messageInput.current.focus();
    dispatch(fetchData());
  }, [dispatch]);

  const clickButton = () => {
    socket.emit('newMessage', { body: formValue, username: user.username });
  };

  return (
    <div className="mt-3">
      <Channels />
      <Messages />
      <InputGroup className="mb-3">
        <Form.Control
          ref={messageInput}
          placeholder="Type message"
          aria-label="Type message"
          aria-describedby="basic-addon2"
          value={formValue}
          onChange={(ev) => setFormValue(ev.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => clickButton()}>
          Send
        </Button>
      </InputGroup>
    </div>
  );
};

export default Chat;
