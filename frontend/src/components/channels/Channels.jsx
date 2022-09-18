import { useSelector } from 'react-redux';
import { selectors as channelsSelectors } from '../../slices/channelsSlice';
import Channel from './Channel';

const Channels = () => {
  const channels = useSelector(channelsSelectors.selectAll);

  const deleteChannel = (channelId) => {
    console.log(channelId);
  };

  return channels && (
    <div className="mt-3">
      <ul className="list-group">
        {channels.map((channel) => (
          <Channel key={channel.id} channel={channel} onDeleteChannel={deleteChannel}/>
        ))}
      </ul>
    </div>
  );
};

export default Channels;
