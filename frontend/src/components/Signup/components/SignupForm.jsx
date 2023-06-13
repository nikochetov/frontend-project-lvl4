import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import useSubmit from '../../../hooks/useSubmit';
import signupFormSchema from '../../../validators/signup-form-schema';

const SignupForm = () => {
  const { error, submit } = useSubmit('signup');
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
    },
    validateOnChange: false,
    validationSchema: signupFormSchema(t),
    onSubmit: (values) => {
      const { username, password } = values;
      submit({ username, password });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} noValidate>
      <Form.Group>
        <FloatingLabel
          controlId="floatingInput"
          label={t('authForm.username')}
          className="mb-3"
        >
          <Form.Control
            name="username"
            required
            type="text"
            placeholder={t('authForm.placeholder.username')}
            value={formik.values.username}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors?.username}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        <FloatingLabel
          controlId="floatingInput"
          label={t('authForm.password')}
          className="mb-3"
        >
          <Form.Control
            name="password"
            required
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder={t('authForm.placeholder.password')}
            isInvalid={!!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors?.password}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        <FloatingLabel
          controlId="floatingInput"
          label={t('authForm.passwordConfirmation')}
          className="mb-3"
        >
          <Form.Control
            name="passwordConfirmation"
            required
            type="password"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            placeholder={t('authForm.placeholder.passwordConfirmation')}
            isInvalid={!!formik.errors.passwordConfirmation}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors?.passwordConfirmation}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      {error?.request.status === 409 && <Alert variant="danger">{t('authForm.errors.userExist')}</Alert>}
      <Button type="submit">{t('authForm.actions.register')}</Button>
      <Button variant="link" href="/login">{t('authForm.login')}</Button>
    </Form>
  );
};

export default SignupForm;
