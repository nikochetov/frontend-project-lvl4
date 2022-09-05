import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Formik } from 'formik';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import authFormSchema from '../validators/auth-form-validator';
import useAuth from '../hooks';
import routes from '../routes';

const Login = () => {
  const auth = useAuth();
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const submit = (values) => {
    const login = async () => {
      try {
        const response = await axios.post(routes.loginPath(), values);
        navigate(state?.from || '/');
        auth.logIn();
        const { token } = response.data;
        localStorage.setItem('userId', JSON.stringify({ token }));
      } catch (err) {
        setError(err);
      }
    };

    login();
  };

  return (
    <Formik validationSchema={authFormSchema} initialValues={{ login: '', password: '' }} onSubmit={(values) => submit(values)}>
      {({
        handleSubmit, handleChange, values, errors, touched,
      }) => (
        <Card className="mt-5 col-md-6 mx-auto">
          <Card.Header>Авторизация</Card.Header>
          <Card.Body>
         <Form onSubmit={handleSubmit}>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Login"
              className="mb-3"
            >
              <Form.Control
                name="login"
                required
                type="text"
                placeholder="Enter login"
                value={values.login}
                onChange={handleChange}
                isInvalid={!!errors.login}
                isValid={touched.login && !errors.login}
              ></Form.Control>
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              {errors.login}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                name="password"
                required
                type="text"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter password"
                isInvalid={!!errors.password}
                isValid={touched.password && !errors.password}
              ></Form.Control>
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
          </Card.Body>
        </Card>
      )}
    </Formik>
  );
};

export default Login;
