import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {
  selectors as channelsSelectors,
  actions as channelsActions,
} from '../../slices/channelsSlice';
import Channel from './Channel';

const Channels = () => {
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelectors.selectAll);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);

  const deleteChannel = (channelId) => {
    console.log(channelId);
  };

  const changeChannel = (channelId) => {
    dispatch(channelsActions.setCurrentChannelId(channelId));
  };

  return channels && (
    <div className="mt-3">
      <ListGroup className="list-group">
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            channel={channel}
            onDeleteChannel={deleteChannel}
            onChangeChannel={changeChannel}
            isActive={channel.id === currentChannelId}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default Channels;
