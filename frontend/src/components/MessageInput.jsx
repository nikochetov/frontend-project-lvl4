import { Button, Form, InputGroup } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';

const MessageInput = ({ onFormSubmit }) => {
  const [formValue, setFormValue] = useState('');
  const messageInput = useRef(null);

  useEffect(() => {
    messageInput.current.focus();
  }, []);

  const submitForm = () => {
    onFormSubmit(formValue);
    setFormValue('');
    messageInput.current.focus();
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        ref={messageInput}
        placeholder="Type message"
        aria-label="Type message"
        aria-describedby="basic-addon2"
        value={formValue}
        onChange={(ev) => setFormValue(ev.target.value)}
      />
      <Button
        type="submit"
        variant="outline-secondary"
        id="button-addon2"
        onClick={() => submitForm()}
      >
        Send
      </Button>
    </InputGroup>
  );
};

export default MessageInput;
