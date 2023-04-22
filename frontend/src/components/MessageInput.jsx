import { Button, Form, InputGroup } from 'react-bootstrap';
import React from 'react';
import { useFormik } from 'formik';
import sendImage from '../assets/icons/send.svg';

const MessageInput = ({ onFormSubmit }) => {
  const messageInput = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values) => {
      onFormSubmit(values.message);
    },
  });

  React.useEffect(() => {
    messageInput.current.focus();
  }, []);

  const submitForm = () => {
    messageInput.current.focus();
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="message">
        <InputGroup className="mt-3 mb-3">
          <Form.Control
            ref={messageInput}
            placeholder="Введите сообщение..."
            aria-label="Введите сообщение..."
            aria-describedby="basic-addon2"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Button
            type="submit"
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => submitForm()}
          >
            <img src={sendImage} alt="Send message" placeholder="Отправить сообщение" />
          </Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default MessageInput;
