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
    <Container md={10} xxl={6} className='h-100 my-4 overflow-hidden rounded shadow'>
      <Row className='h-100 bg-white flex-md-row'>
        <Col xs={3} xl={3} className='border-end px-0 bg-light'>
          <div className='bg-light mb-4 p-3 small'><span>Каналы</span></div>
          <Channels />
        </Col>
        <Col xs={9} xxl={6} className='col p-0 h-100 '>
          <div className='bg-light mb-4 p-3 shadow-sm small'><span>Сообщения</span></div>
          <div className='chat-messages overflow-auto px-5 '>
          <Messages><MessageInput onFormSubmit={clickButton}/></Messages>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
