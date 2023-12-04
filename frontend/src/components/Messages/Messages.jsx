import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import React from 'react';
import Message from './Message';

const Messages = () => {
  const messages = useSelector((state) => state.messagesState.channelMessages);

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return messages && (
  <ListGroup variant="flush" className="list-group overflow-hidden overflow-y-scroll">
    {messages.map(({ id, body, username }) => (
      <Message key={id} body={body} author={username} />
    ))}
    <div ref={messagesEndRef} />
  </ListGroup>
  );
};

export default Messages;
