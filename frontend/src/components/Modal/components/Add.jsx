import { FormControl, FormGroup, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';

const Add = (props) => {
  const { onHide } = props;
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: props.onSubmit,
  });
  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup className="mb-3">
            <FormControl
              name="body"
              required
              ref={inputEl}
              data-testid="input-body"
              onChange={formik.handleChange}
              value={formik.values.body}
              type="text"
              placeholder="Enter text"
            />
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
