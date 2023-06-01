import { Card } from 'react-bootstrap';
import React from 'react';
import useAuthHeader from '../hooks/useAuthHeader';

const AuthContainer = ({ children }) => {
  const header = useAuthHeader();
  return (
    <Card className="mt-5 col-md-7 col-sm-10 mx-auto">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
};

export default AuthContainer;
