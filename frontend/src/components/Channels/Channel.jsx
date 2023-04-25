import {
  ListGroup, Dropdown, ButtonGroup, Button,
} from 'react-bootstrap';

const Channel = ({
  channel, isActive, onDeleteChannel, onChangeChannel, onRenameChannel,
}) => {
  const { id, name, removable } = channel;
  return (
    <ListGroup.Item>
      <Dropdown as={ButtonGroup}>
        <Button variant={isActive ? 'primary' : null} size="sm" onClick={() => onChangeChannel(id)}>{`# ${name}`}</Button>

        {removable && (
        <>
          <Dropdown.Toggle split variant={isActive ? 'primary' : null} id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onRenameChannel(id)}>Переименовать</Dropdown.Item>
            <Dropdown.Item onClick={() => onDeleteChannel(id)} style={{ color: '#dc3545' }}>Удалить</Dropdown.Item>
          </Dropdown.Menu>
        </>
        )}
      </Dropdown>
    </ListGroup.Item>
  );
};

export default Channel;
