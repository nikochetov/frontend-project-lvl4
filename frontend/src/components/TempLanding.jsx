import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { fetchChannels, removeChannel, selectors } from '../slices/channelsSlice';

const TempLanding = () => {
  const dispatch = useDispatch();
  const channels = useSelector(selectors.selectAll);
  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  const handleRemoveChannel = (channelId) => {
    dispatch(removeChannel(channelId));
  };

  return channels && (
    <div className="mt-3">
      <ul className="list-group">
        {channels.map(({ id, name, removable }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{name}</span>
            {removable && <Button variant="outline-danger" size="sm" onClick={() => handleRemoveChannel(id)}>
              Delete
            </Button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TempLanding;
