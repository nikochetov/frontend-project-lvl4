import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './index';
import loginRequest from '../services/login-service';

const useLoginSubmit = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [authFailed, setAuthFailed] = React.useState(false);

  const submit = (values) => {
    setAuthFailed(false);
    const login = async () => {
      try {
        const response = await loginRequest(values);
        navigate('/chat');
        auth.logIn();
        localStorage.setItem('user', JSON.stringify(response.data));
      } catch (err) {
        setAuthFailed(true);
      }
    };

    login();
  };

  return { authFailed, submit };
};

export default useLoginSubmit;
