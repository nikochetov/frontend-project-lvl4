import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert, Button } from 'react-bootstrap';
import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import authFormSchema from '../../../validators/auth-form-validator';
import useSubmit from '../../../hooks/useSubmit';

const LoginForm = () => {
  const { error, submit } = useSubmit('login');
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: authFormSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      submit(values);
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
            placeholder={t('authForm.placeholder.enterUsername')}
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
            placeholder={t('authForm.placeholder.enterPassword')}
            isInvalid={!!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors?.password}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      {error?.response.status === 401 && <Alert variant="danger">{t('authForm.errors.wrongUsernameOrPassword')}</Alert>}
      <Button type="submit">{t('authForm.login')}</Button>
      <Button variant="link" href="/signup">{t('authForm.register')}</Button>
    </Form>
  );
};

export default LoginForm;
