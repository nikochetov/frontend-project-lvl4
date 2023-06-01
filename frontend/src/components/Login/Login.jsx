import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';
import { Alert, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import authFormSchema from '../../validators/auth-form-validator';
import routes from '../../routes';
import { useAuth } from '../../hooks';

const Login = () => {
  const auth = useAuth();
  const [authFailed, setAuthFailed] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  React.useEffect(() => {
    if (auth.isLoggedIn) {
      navigate(state?.from || '/chat');
    }
  }, []);

  const submit = (values) => {
    setAuthFailed(false);
    const login = async () => {
      try {
        const response = await axios.post(routes.loginPath(), values);
        navigate('/chat');
        auth.logIn();
        localStorage.setItem('user', JSON.stringify(response.data));
      } catch (err) {
        setAuthFailed(true);
      }
    };

    login();
  };

  const formChange = () => {
    setAuthFailed(false);
  };

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
    <Card className="mt-5 col-md-7 col-sm-10 mx-auto">
      <Card.Header>Авторизация</Card.Header>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit} onChange={() => formChange(formik.errors)} noValidate>
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
                type="text"
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
          {authFailed && <Alert variant="danger">Неверный логин и/или пароль</Alert>}
          <Button type="submit">Войти</Button>
          <Button variant="link">Регистрация</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
