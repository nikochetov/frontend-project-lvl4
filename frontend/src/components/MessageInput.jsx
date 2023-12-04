import { Button, Form, InputGroup } from 'react-bootstrap';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import sendImage from '../assets/icons/send.svg';
import { cleanMessage } from '../utils';

const MessageInput = ({ onFormSubmit }) => {
  const { t } = useTranslation();
  const messageInput = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values) => {
      const { message } = values;
      const filteredMessage = cleanMessage(message) // todo if empty;
      onFormSubmit(filteredMessage);
      formik.setValues({ message: '' });
    },
    validationSchema: yup.object().shape({
      message: yup.string().required('Required'),
    }),
  });

  React.useEffect(() => {
    messageInput.current.focus();
  }, []);

  const submitForm = () => () => {
    messageInput.current.focus();
  };

  return (
    <Form onSubmit={formik.handleSubmit} className="position-absolute bottom-0">
      <Form.Group controlId="message">
        <InputGroup className="mt-3 mb-3">
          <Form.Control
            ref={messageInput}
            placeholder={t('messages.enterMessage')}
            aria-label={t('messages.enterMessage')}
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Button
            type="submit"
            variant="outline-secondary"
            id="button-addon2"
            onClick={submitForm}
          >
            <img src={sendImage} alt="Send message" placeholder={t('actions.messages.sendMessage')} />
          </Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default MessageInput;
