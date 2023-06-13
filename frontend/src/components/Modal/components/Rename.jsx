import {
  Button,
  FormControl, FormGroup, InputGroup, Modal,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { addChannelSchema } from '../../../validators';

const Rename = (props) => {
  const { onHide, submitModal, data } = props;
  const { channelsNames } = useSelector((state) => state.channelsState);
  const { t } = useTranslation();
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: data.name,
    },
    validationSchema: addChannelSchema(t, channelsNames),
    onSubmit: (values) => {
      submitModal({ name: values.body, id: data.id });
    },
  });

  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.renameChannel')}</Modal.Title>
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
                placeholder={t('modal.form.enterChannelName')}
                isInvalid={!!formik.errors.body}
              />
              <FormControl.Feedback type="invalid">
                {formik.errors.body}
              </FormControl.Feedback>
            </InputGroup>
          </FormGroup>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => onHide()}>{t('action.cancel')}</Button>
            <Button
              type="submit"
              className="btn btn-primary"
            >
              {t('action.rename')}
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
