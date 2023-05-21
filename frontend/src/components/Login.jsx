import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Formik } from 'formik';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import authFormSchema from '../validators/auth-form-validator';
import routes from '../routes';
import { useAuth } from '../hooks';

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
        // navigate(state?.from || '/');
        navigate('/chat');
        auth.logIn();
        // const { username, token } = response.data;
        localStorage.setItem('user', JSON.stringify(response.data));
        // localStorage.setItem('user', JSON.stringify({ username }));
      } catch (err) {
        setAuthFailed(true);
      }
    };

    login();
  };

  return (
    <Formik
      validationSchema={authFormSchema}
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => submit(values)}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
      }) => (
        <Card className="mt-5 col-md-7 col-sm-10 mx-auto">
          <Card.Header>Авторизация</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
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
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={authFailed}
                    isValid={touched.username && !authFailed}
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
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
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Введите пароль"
                    isInvalid={authFailed}
                    isValid={touched.password && !authFailed}
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Войти</Button>
              <Button variant="link">Регистрация</Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Formik>
  );
};

export default Login;
