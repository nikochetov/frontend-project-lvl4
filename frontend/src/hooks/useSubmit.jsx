import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './index';
import loginRequest from '../services/login-service';
import signupRequest from '../services/signup-service';

const useSubmit = (action) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [error, setError] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  const submit = async (values) => {
    setLoading(true);
    try {
      const response = await (action === 'login' ? loginRequest(values) : signupRequest(values));
      navigate('/chat');
      auth.logIn();
      localStorage.setItem('user', JSON.stringify(response.data));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { isLoading, error, submit };
};

export default useSubmit;
