import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { io } from 'socket.io-client';
import { getDataThunk } from '../thunks/data-thunk';
import Messages from './messages/Messages';
import Channels from './channels/Channels';
import { UserContext } from '../contexts';
import MessageInput from './MessageInput';
import addChannelIcon from '../assets/icons/plus.svg';

const socket = io();
socket.on('newMessage', (ev) => {
  console.log(ev);
});

const Chat = () => {
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  const currentChannelId = useSelector((state) => state.channelsState.currentChannelId);

  useEffect(() => {
    dispatch(getDataThunk());
  }, []);

  const clickButton = (message) => {
    socket.emit('newMessage', { body: message, username: user.username, channelId: currentChannelId });
  };

  return (
    <Container md={10} xxl={6} className='my-4 rounded shadow'>
      <Row className='h-100 bg-white flex-md-row'>
        <Col xs={3} xl={3} className='border-end px-0 bg-light'>
          <div className='bg-light mb-4 p-3 small d-flex justify-content-between align-items-center'><div><span>Каналы</span></div>
            <Button variant="light" className='p-0 text-primary btn btn-group-vertical'>
              <img src={addChannelIcon} style={{ width: '30px', color: '#0d6efd' }} alt="Добавить канал"/>
            </Button>
          </div>
          <Channels />
        </Col>
        <Col xs={9} xxl={6} className='p-0'>
          <div className='bg-light mb-4 p-3 shadow-sm small'><span>Сообщения</span></div>
          <div className='chat-messages overflow-hidden px-5'>
          <Messages><MessageInput onFormSubmit={clickButton}/></Messages>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
