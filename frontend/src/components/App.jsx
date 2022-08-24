import '../styles/App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from './Login.jsx';
import NotMatch from './NotMatch.jsx';
import AuthContext from '../../contexts';
import useAuth from '../../hooks';

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
);

export default App;
