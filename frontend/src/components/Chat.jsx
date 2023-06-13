import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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
import modalKind from '../constants/modal-kind';

const Chat = () => {
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  const currentChannelId = useSelector((state) => state.channelsState.currentChannelId);
  const socket = useContext(SocketContext);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(channelsActions.setCurrentChannelId(1));
    dispatch(getDataThunk());
  }, []);

  const addChannel = () => {
    dispatch(modalActions.openModal({ kind: modalKind.add }));
  };

  const clickButton = (message) => {
    socket.emit(
      socketRequestKind.newMessage,
      { body: message, username: user.username, channelId: currentChannelId },
    );
  };

  return (
    <Container className="my-4 rounded shadow" md={6} style={{ height: '85vh' }}>
      <Row className="h-100 bg-white justify-content-md-center">
        <Col xs={3} xl={2} className="border-end px-0">
          <div className="bg-light mb-4 p-3 shadow-sm small d-flex justify-content-between align-items-center">
            <div><span>{t('channels.channels')}</span></div>
            <Button variant="light" className="p-0 text-primary btn btn-group-vertical" onClick={addChannel}>
              <img src={addChannelIcon} style={{ width: '30px', color: '#0d6efd' }} alt={t('channels.addChannel')} />
            </Button>
          </div>
          <Channels />
        </Col>
        <Col className="p-0 h-100 position-relative">
          <div className="bg-light p-3 shadow-sm small d-flex justify-content-between align-items-center" style={{ height: '63px' }}>
            <div><span>{t('messages.messages')}</span></div>
          </div>
          <div className="chat-messages overflow-scroll px-5 mt-2" style={{ height: '80%' }}>
            <Messages><MessageInput onFormSubmit={clickButton} /></Messages>
          </div>
        </Col>
      </Row>
      <ModalContainer />
    </Container>
  );
};

export default Chat;
