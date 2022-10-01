import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { selectors as messagesSelectors } from '../../slices/messagesSlice';
import Message from './Message';

const Messages = ({ children }) => {
  const messages = useSelector(messagesSelectors.selectAll);

  return messages && (
    <>
      <ListGroup variant="flush" className="list-group">
        {messages.map(({ id, body }) => (
          <Message key={id} body={body} />
        ))}
      </ListGroup>
      {children}
    </>
  );
};

export default Messages;
