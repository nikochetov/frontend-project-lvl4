import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import useSubmit from '../../../hooks/useSubmit';
import signupFormSchema from '../../../validators/signup-form-validator';

const SignupForm = () => {
  const { failed, submit } = useSubmit('signup');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
    },
    validateOnChange: false,
    validationSchema: signupFormSchema,
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
      <Form.Group>
        <FloatingLabel
          controlId="floatingInput"
          label="Подтверждение пароля"
          className="mb-3"
        >
          <Form.Control
            name="passwordConfirmation"
            required
            type="password"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            placeholder="Введите пароль"
            isInvalid={!!formik.errors.passwordConfirmation}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors?.passwordConfirmation}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      {failed && <Alert variant="danger">Пользователь уже существует</Alert>}
      <Button type="submit">Регистрация</Button>
      <Button variant="link" href="/login">Войти</Button>
    </Form>
  );
};

export default SignupForm;
