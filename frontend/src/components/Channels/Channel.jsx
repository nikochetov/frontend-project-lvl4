import { ListGroup, SplitButton, Dropdown } from 'react-bootstrap';

const Channel = ({
  channel, isActive, onDeleteChannel, onChangeChannel,
}) => {
  const { id, name, removable } = channel;
  return (
    <ListGroup.Item>
      <SplitButton
        as="button"
        size="sm"
        title={`# ${name}`}
        variant={isActive ? 'primary' : null}
        onClick={() => onChangeChannel(id)}
      >
        {removable
          && (
            <>
              <Dropdown.Item>Переименовать</Dropdown.Item>
              <Dropdown.Item onClick={() => onDeleteChannel(id)}>Удалить</Dropdown.Item>
            </>
          )}
      </SplitButton>
    </ListGroup.Item>
  );
};

export default Channel;
