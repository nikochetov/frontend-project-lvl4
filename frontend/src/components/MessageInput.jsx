import { Button, Form, InputGroup } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import sendImage from '../assets/icons/send.svg'

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
    <InputGroup className="mt-3 mb-3">
      <Form.Control
        ref={messageInput}
        placeholder="Введите сообщение..."
        aria-label="Введите сообщение..."
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
        <img src={sendImage} alt='Send message' placeholder='Отправить сообщение'/>
      </Button>
    </InputGroup>
  );
};

export default MessageInput;
