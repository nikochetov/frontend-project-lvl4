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
