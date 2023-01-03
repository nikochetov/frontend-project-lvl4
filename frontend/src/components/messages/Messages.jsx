import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { selectors as messagesSelectors } from '../../slices/messagesSlice';
import Message from './Message';

const Messages = ({ children }) => {
  const messages = useSelector((state) => state.messagesState.messages);

  return messages && (
    <>
      <ListGroup variant="flush" className="list-group">
        {messages.map(({ id, body, username }) => (
          <Message key={id} body={body} author={username}/>
        ))}
      </ListGroup>
      {children}
    </>
  );
};

export default Messages;
