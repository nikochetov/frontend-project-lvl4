import { useState } from 'react';
import { AuthContext } from '../contexts';
import hasToken from '../utils/has-token';

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(hasToken());
  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
