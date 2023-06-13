import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './index';
import loginRequest from '../services/login-service';
import signupRequest from '../services/signup-service';

const useSubmit = (action) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [submitFailed, setSubmitFailed] = React.useState(false);

  const submit = async (values) => {
    setSubmitFailed(false);
    try {
      const response = await (action === 'login' ? loginRequest(values) : signupRequest(values));
      navigate('/chat');
      auth.logIn();
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (err) {
      setSubmitFailed(true);
    }
  };

  return { submitFailed, submit };
};

export default useSubmit;
