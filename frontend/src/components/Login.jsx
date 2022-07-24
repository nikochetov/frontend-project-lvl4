import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Formik } from 'formik';

const Login = () => {
  const submit = (values) => {
    console.log('submit values::::::', values);
  };

  return (
    <Formik initialValues={{ login: '', password: '' }} onSubmit={(values) => submit(values)}>
      {({ errors, touched }) => (
        <Form>
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
                isValid={touched.login && !errors.login}
              ></Form.Control>
            </FloatingLabel>
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
                placeholder="Enter password"
                isValid={touched.password && !errors.password}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
        </Form>
      )}
    </Formik>
    // <>
    //   <FloatingLabel
    //     controlId="floatingInput"
    //     label="Email address"
    //     className="mb-3"
    //   >
    //     <Form.Control type="email" placeholder="name@example.com" />
    //   </FloatingLabel>
    //   <FloatingLabel controlId="floatingPassword" label="Password">
    //     <Form.Control type="password" placeholder="Password" />
    //   </FloatingLabel>
    // </>
  );
};

export default Login;
