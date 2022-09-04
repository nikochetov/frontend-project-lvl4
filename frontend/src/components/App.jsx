import '../styles/App.css';
import React, { useState } from 'react';
import {
  Route, BrowserRouter as Router, Routes, useLocation, Navigate, Link,
} from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Login from './Login.jsx';
import NotMatch from './NotMatch.jsx';
import AuthContext from '../contexts';
import useAuth from '../hooks';

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
}

const AuthButton = () => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.isLoggedIn
      ? <Button onClick={auth.logOut}>Log Out</Button>
      : <Button as={Link} to="/login" state={{ from: location }}>Log In</Button>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Shlack</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/public">Public page</Nav.Link>
          <Nav.Link as={Link} to="/private">Private page</Nav.Link>
        </Nav>
        <AuthButton />
      </Navbar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
