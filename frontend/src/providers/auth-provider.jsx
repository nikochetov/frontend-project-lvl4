import { useMemo, useState } from 'react';
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
    <AuthContext.Provider value={useMemo(() => ({ isLoggedIn, logIn, logOut }), [isLoggedIn])}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
