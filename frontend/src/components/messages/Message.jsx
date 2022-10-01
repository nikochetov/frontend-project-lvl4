import { ListGroup } from 'react-bootstrap';

const Message = ({ body }) => (
  <ListGroup.Item className="list-group-item d-flex">
    <span className="mr-auto">{body}</span>
  </ListGroup.Item>
);

export default Message;
