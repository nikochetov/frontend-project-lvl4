import {
  Button,
  FormControl, FormGroup, InputGroup, Modal,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import addChannelSchema from '../../../validators/add-channel-schema';

const Add = (props) => {
  const { onHide, submitModal } = props;
  const inputEl = useRef(null);
  const { t } = useTranslation();
  const { channelsNames } = useSelector((state) => state.channelsState);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema: yup.object().shape({
      body: addChannelSchema(t, channelsNames),
    }),
    onSubmit: (values) => {
      submitModal(values.body);
    },
  });

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление канала</Modal.Title>
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
                placeholder="Введите название канала"
                isInvalid={!!formik.errors.body}
              />
              <FormControl.Feedback type="invalid">
                {formik.errors.body || 'Должно быть уникальным'}
              </FormControl.Feedback>
            </InputGroup>
          </FormGroup>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => onHide()}>Отмена</Button>
            <Button
              type="submit"
              className="btn btn-primary"
            >
              Добавить
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
