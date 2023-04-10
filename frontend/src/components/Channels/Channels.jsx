import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {
  actions as channelsActions,
} from '../../slices/channelsSlice';
import Channel from './Channel';
import { actions as modalActions } from '../../slices/modalSlice';

const Channels = () => {
  const dispatch = useDispatch();
  const { channels, currentChannelId } = useSelector((state) => state.channelsState);

  const deleteChannel = (id) => {
    dispatch(modalActions.openModal({ kind: 'removing', data: id }));
  };

  const renameChannel = (id) => {
    dispatch(modalActions.openModal({ kind: 'renaming', data: id }));
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
            onDeleteChannel={() => deleteChannel(channel)}
            onRenameChannel={() => renameChannel(channel)}
            onChangeChannel={changeChannel}
            isActive={channel.id === currentChannelId}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default Channels;
