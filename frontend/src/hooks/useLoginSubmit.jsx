import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
import { useAuth } from './index';

const useLoginSubmit = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [authFailed, setAuthFailed] = React.useState(false);

  const submit = (values) => {
    setAuthFailed(false);
    const login = async () => {
      try {
        const response = await axios.post(routes.loginPath(), values);
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
