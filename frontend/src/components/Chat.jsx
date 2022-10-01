import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { io } from 'socket.io-client';
import { fetchData } from '../thunks/data-thunk';
import Messages from './messages/Messages';
import Channels from './channels/Channels';
import { UserContext } from '../contexts';
import MessageInput from './MessageInput';

const socket = io();
socket.on('newMessage', (ev) => {
  console.log(ev);
});

const Chat = () => {
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const clickButton = (message) => {
    socket.emit('newMessage', { body: message, username: user.username, channelId: currentChannelId });
  };

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Channels />
        </Col>
        <Col>
          <Messages />
          <MessageInput onFormSubmit={clickButton}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
