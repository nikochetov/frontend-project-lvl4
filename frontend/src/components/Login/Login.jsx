import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import AuthContainer from '../AuthContainer';
import LoginForm from './components/LoginForm';

const Login = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  React.useEffect(() => {
    if (auth.isLoggedIn) {
      navigate(state?.from || '/chat');
    }
  }, []);

  return (
    <AuthContainer>
      <LoginForm />
    </AuthContainer>
  );
};

export default Login;
