import {
  Button,
  FormControl, FormGroup, InputGroup, Modal,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { renameChannelSchema } from '../../../validators';

const Rename = (props) => {
  const { onHide, submitModal, data } = props;
  const { t } = useTranslation();
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: data.name,
    },
    validationSchema: renameChannelSchema(t),
    onSubmit: (values) => {
      submitModal({ name: values.body, id: data.id });
    },
  });

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Переименование канала</Modal.Title>
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
              Переименовать
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
