import { useSelector } from 'react-redux';
import { selectors as messagesSelectors } from '../../slices/messagesSlice';
import Message from './Message';

const Messages = () => {
  const messages = useSelector(messagesSelectors.selectAll);

  return messages && (
    <div className="mt-3">
      <ul className="list-group">
        {messages.map(({ id, body }) => (
          <Message key={id} body={body} />
        ))}
      </ul>
    </div>
  );
};

export default Messages;
