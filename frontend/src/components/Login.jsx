import React, { useEffect, useState } from 'react';
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
  const [authFailed, setAuthFailed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate(state?.from || '/private');
    }
  }, []);

  const submit = (values) => {
    setAuthFailed(false);
    const login = async () => {
      try {
        const response = await axios.post(routes.loginPath(), values);
        // navigate(state?.from || '/');
        navigate('/private');
        auth.logIn();
        const { token } = response.data;
        localStorage.setItem('userId', JSON.stringify({ token }));
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
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  name="username"
                  required
                  type="text"
                  placeholder="Enter username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={authFailed}
                  isValid={touched.username && !authFailed}
                ></Form.Control>
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                {errors.username}
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
                  isInvalid={authFailed}
                  isValid={touched.password && !authFailed}
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
