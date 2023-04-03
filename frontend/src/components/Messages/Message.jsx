import { ListGroup } from 'react-bootstrap';

const Message = ({ body, author }) => (
  <ListGroup.Item className="list-group-item d-flex">
    <span className="mr-auto">
      <b>{`${author}: `}</b>
      {body}
    </span>
  </ListGroup.Item>
);

export default Message;
