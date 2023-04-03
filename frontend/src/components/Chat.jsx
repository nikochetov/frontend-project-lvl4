import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { getDataThunk } from '../thunks/data-thunk';
import Messages from './Messages/Messages';
import Channels from './Channels/Channels';
import { SocketContext, UserContext } from '../contexts';
import MessageInput from './MessageInput';
import addChannelIcon from '../assets/icons/plus.svg';
import { actions as channelsActions } from '../slices/channelsSlice';
import socketRequestKind from '../constants/socket-request-kind';
import ModalContainer from './Modal/components/ModalContainer';
import { actions as modalActions } from '../slices/modalSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  const currentChannelId = useSelector((state) => state.channelsState.currentChannelId);
  const socket = useContext(SocketContext);

  useEffect(() => {
    dispatch(channelsActions.setCurrentChannelId(1));
    dispatch(getDataThunk());
  }, []);

  const addChannel = () => {
    dispatch(modalActions.openModal({ kind: 'adding' }));
  };

  const clickButton = (message) => {
    socket.emit(
      socketRequestKind.newMessage,
      { body: message, username: user.username, channelId: currentChannelId },
    );
  };

  return (
    <Container md={10} xxl={6} className="my-4 rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={3} xl={2} className="border-end px-0 bg-light">
          <div className="bg-light mb-4 p-3 small d-flex justify-content-between align-items-center">
            <div><span>Каналы</span></div>
            <Button variant="light" className="p-0 text-primary btn btn-group-vertical" onClick={addChannel}>
              <img src={addChannelIcon} style={{ width: '30px', color: '#0d6efd' }} alt="Добавить канал" />
            </Button>
          </div>
          <Channels />
        </Col>
        <Col xs={9} xxl={6} className="p-0">
          <div className="bg-light mb-4 p-3 shadow-sm small"><span>Сообщения</span></div>
          <div className="chat-messages overflow-hidden px-5">
            <Messages><MessageInput onFormSubmit={clickButton} /></Messages>
          </div>
        </Col>
      </Row>
      <ModalContainer />
    </Container>
  );
};

export default Chat;
