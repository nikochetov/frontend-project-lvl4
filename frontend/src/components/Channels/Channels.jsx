import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import {
  actions as channelsActions,
} from '../../slices/channelsSlice';
import Channel from './Channel';
import { SocketContext } from '../../contexts';
import socketRequestKind from '../../constants/socket-request-kind';
import { actions as modalActions } from '../../slices/modalSlice';

const Channels = () => {
  const dispatch = useDispatch();
  const { channels, currentChannelId } = useSelector((state) => state.channelsState);
  const socket = useContext(SocketContext);

  const deleteChannel = (id) => {
    dispatch(modalActions.openModal({ kind: 'removing', data: id }));
    // socket.emit(socketRequestKind.removeChannel, { id });
  };

  const changeChannel = (channelId) => {
    dispatch(channelsActions.setCurrentChannelId(channelId));
  };

  return channels && (
    <div className="mt-3">
      <ListGroup variant="flush" className="list-group">
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            channel={channel}
            onDeleteChannel={() => deleteChannel(channel.id)}
            onChangeChannel={changeChannel}
            isActive={channel.id === currentChannelId}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default Channels;
