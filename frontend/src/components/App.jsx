import '../styles/App.css';
import { useState } from 'react';
import {
  Route, BrowserRouter as Router, Routes, useLocation, Navigate, Link,
} from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';
import Login from './Login.jsx';
import NotMatch from './NotMatch.jsx';
import { AuthContext } from '../contexts';
import useAuth from '../hooks';
import Chat from './Chat';
import UserContext from '../contexts/user-context';

const hasToken = () => !!JSON.parse(localStorage.getItem('user'));

const UserProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return <UserContext.Provider value={ user }>
    { children }
  </UserContext.Provider>;
};

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

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

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
        <AuthButton />
      </Navbar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotMatch />} />
        <Route path="/private" element={(
          <UserProvider>
            <PrivateRoute>
              <Chat/>
            </PrivateRoute>
          </UserProvider>
        )} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
