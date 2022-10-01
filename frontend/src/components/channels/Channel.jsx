import { Button, ListGroup } from 'react-bootstrap';

const Channel = ({
  channel, isActive, onDeleteChannel, onChangeChannel,
}) => {
  const { id, name, removable } = channel;
  return (
    <ListGroup.Item
      action
      active={isActive}
      onClick={() => onChangeChannel(id)}
    >
      <span className="mr-auto">{name}</span>
      {removable && <Button variant="outline-danger" size="sm" onClick={() => onDeleteChannel(id)}>
        Delete
      </Button>}
    </ListGroup.Item>
  );
};

export default Channel;
