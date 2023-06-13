import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert, Button } from 'react-bootstrap';
import React from 'react';
import { useFormik } from 'formik';
import authFormSchema from '../../../validators/auth-form-validator';
import useSubmit from '../../../hooks/useSubmit';

const LoginForm = () => {
  const { failed, submit } = useSubmit('login');

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
          label="Логин"
          className="mb-3"
        >
          <Form.Control
            name="username"
            required
            type="text"
            placeholder="Введите логин"
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
          label="Пароль"
          className="mb-3"
        >
          <Form.Control
            name="password"
            required
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Введите пароль"
            isInvalid={!!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors?.password}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      {failed && <Alert variant="danger">Неверный логин и/или пароль</Alert>}
      <Button type="submit">Войти</Button>
      <Button variant="link" href="/signup">Регистрация</Button>
    </Form>
  );
};

export default LoginForm;
