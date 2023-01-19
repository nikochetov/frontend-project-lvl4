import { Button, ButtonGroup, DropdownButton, ListGroup, SplitButton, Dropdown } from 'react-bootstrap';

const Channel = ({
  channel, isActive, onDeleteChannel, onChangeChannel,
}) => {
  const { id, name, removable } = channel;
  return (
    <ListGroup.Item>
        <SplitButton
        as={SplitButton}
        size="sm"
        title={`# ${name}`}
        variant={isActive ? 'primary' : null}
        onClick={() => onChangeChannel(channel.id)}
        >
          <Dropdown.Item>Переименовать</Dropdown.Item>
          <Dropdown.Item onClick={() => onDeleteChannel(channel.id)}>Удалить</Dropdown.Item>
        </SplitButton>
    </ListGroup.Item>
  );
};

export default Channel;
