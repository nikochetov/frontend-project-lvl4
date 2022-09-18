import { Button } from 'react-bootstrap';

const Channel = ({
  channel, onDeleteChannel,
}) => {
  const { id, name, removable } = channel;
  return (
    <li className="list-group-item d-flex">
      <span className="mr-auto">{name}</span>
      {removable && <Button variant="outline-danger" size="sm" onClick={() => onDeleteChannel(id)}>
        Delete
      </Button>}
    </li>
  );
};

export default Channel;
