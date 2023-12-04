import {
  ListGroup, Dropdown, ButtonGroup, Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Channel = ({
  channel, isActive, onDeleteChannel, onChangeChannel, onRenameChannel,
}) => {
  const { id, name, removable } = channel;
  const { t } = useTranslation();
  // todo map
  return (
    <ListGroup.Item>
      <Dropdown as={ButtonGroup}>
        <Button variant={isActive ? 'primary' : null} size="sm" onClick={() => onChangeChannel(id)}>{`# ${name}`}</Button>

        {removable && (
        <>
          <Dropdown.Toggle split variant={isActive ? 'primary' : null} id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onRenameChannel(id)}>{t('actions.rename')}</Dropdown.Item>
            <Dropdown.Item onClick={() => onDeleteChannel(id)} style={{ color: '#4c3f40' }}>{t('actions.remove')}</Dropdown.Item>
          </Dropdown.Menu>
        </>
        )}
      </Dropdown>
    </ListGroup.Item>
  );
};

export default Channel;
