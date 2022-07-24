import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import authFormSchema from '../validators/auth-form-validator';

const Login = () => {
  // const [validated, setValidated] = useState(false);

  const submit = (values) => {
    console.log('submit values::::::', values);
  };

  return (
    <Formik validationSchema={authFormSchema} initialValues={{ login: '', password: '' }} onSubmit={(values) => submit(values)}>
      {({
        handleSubmit, handleChange, values, errors, touched,
      }) => (
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
      )}
    </Formik>
  );
};

export default Login;
