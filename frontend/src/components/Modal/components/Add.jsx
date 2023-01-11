import {
  FormControl, FormGroup, InputGroup, Modal,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

const Add = (props) => {
  const { onHide, submitModal } = props;
  const inputEl = useRef(null);
  const { channels } = useSelector((state) => state.channelsState);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema: yup.object().shape({
      body: yup.string()
        .min(3, 'От 3 до 20 символов')
        .max(20, 'От 3 до 20 символов')
        .required('Обязательное поле')
        .test('Unique', 'Должно быть уникальным', (value) => !channels
          .map((channel) => channel.name)
          .some((channelName) => channelName === value)),
    }),
    onSubmit: (values) => {
      submitModal(values.body);
    },
  });

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup className="mb-3">
            <InputGroup hasValidation>
            <FormControl
              name="body"
              required
              ref={inputEl}
              data-testid="input-body"
              onChange={formik.handleChange}
              value={formik.values.body}
              type="text"
              placeholder="Enter text"
              isInvalid={!!formik.errors.body}
            />
            <FormControl.Feedback type="invalid">
              {formik.errors.body || 'Должно быть уникальным'}
            </FormControl.Feedback>
              </InputGroup>
          </FormGroup>
          <button
            type="submit"
            className="btn btn-primary"
          >submit</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
